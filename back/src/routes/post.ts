import express from 'express';
import multer from 'multer';
import path from 'path';

import Post from '../sequelize/models/post';
import User from '../sequelize/models/user';
import { isLoggedIn } from './middleware';
import Hashtag from '../sequelize/models/hashtag';
import Image from '../sequelize/models/image';

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },

    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname);
      done(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

router.post('/upload', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const hashtags: string[] = req.body.content.match(/#[^\s]+/g);
    const newPost = await Post.create({
      content: req.body.content,
      UserId: id,
    });

    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: {
              name: tag.slice(1).toLowerCase(),
            },
          }),
        ),
      );
      await newPost.addHashtags(result.map((r) => r[0]));
    }

    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(req.body.image.map((image: string) => Image.create({ src: image })));
        await newPost.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await newPost.addImage(image);
      }
    }

    const fullPost = await Post.findOne({
      where: { id: newPost.id },
      include: [
        {
          model: User,
          attributes: ['id', 'familyName', 'firstName', 'userId'],
        },
        {
          model: Image,
        },
      ],
    });

    return res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
