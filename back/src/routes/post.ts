import express from 'express';

import Post, { DEFAULT_POST_ATTRIBUTES } from '../sequelize/models/post';
import User, { DEFAULT_USER_ATTRIBUTES } from '../sequelize/models/user';
import { isLoggedIn } from './middleware';
import Hashtag from '../sequelize/models/hashtag';
import Image, { DEFAULT_IMAGE_ATTRIBUTES } from '../sequelize/models/image';
import Comment, { DEFAULT_COMMENT_ATTRIBUTES } from '../sequelize/models/comment';
import upload from '../util/imageUploads';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
        {
          model: Image,
        },
      ],
      attributes: DEFAULT_POST_ATTRIBUTES,
    });

    return res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/:id/share', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Post,
          as: 'SharePost',
          attributes: ['id', 'content', 'createdAt', 'updatedAt'],
        },
      ],
    });

    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }

    if (id === post.UserId || (post.SharePost && post.SharePost.UserId === id)) {
      return res.status(403).send('자신의 글은 공유할 수 없습니다.');
    }

    const shareTargetId = post.SharePost || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: id,
        SharePostId: shareTargetId,
      },
    });

    if (exPost) {
      return res.status(403).send('이미 공유한 게시글입니다.');
    }

    const share = await Post.create({
      UserId: id,
      SharePostId: shareTargetId,
      content: 'share',
    });

    const shareWithPrePost = await Post.findOne({
      where: {
        id: share.id,
      },
      include: [
        {
          model: User,
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
        {
          model: Post,
          as: 'SharePost',
          attributes: ['id', 'content', 'createdAt', 'updatedAt'],
          include: [
            {
              model: User,
              attributes: DEFAULT_USER_ATTRIBUTES,
            },
            {
              model: Image,
              attributes: DEFAULT_IMAGE_ATTRIBUTES,
            },
          ],
        },
      ],
      attributes: DEFAULT_POST_ATTRIBUTES,
    });

    return res.json(shareWithPrePost);
  } catch (e) {
    console.error(e);
    next(e);
  }
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
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
        {
          model: Image,
          attributes: DEFAULT_IMAGE_ATTRIBUTES,
        },
      ],
      attributes: DEFAULT_POST_ATTRIBUTES,
    });

    return res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {
  const images = req.files as Express.Multer.File[];
  return res.json(images.map((v) => v.filename));
});

router.post('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!post) {
      res.status(404).send('포스트가 존재하지 않습니다.');
    }

    await post.addLiker(id);

    return res.json({ userId: id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!post) {
      res.status(404).send('포스트가 존재하지 않습니다.');
    }

    await post.removeLiker(id);

    return res.json({ userId: id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }

    const comments = await Comment.findAll({
      where: {
        PostId: req.params.id,
      },
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: User,
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
      ],
      attributes: DEFAULT_COMMENT_ATTRIBUTES,
    });

    return res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }

    const newComment = await Comment.create({
      PostId: post.id,
      UserId: id,
      content: req.body.content,
    });

    await post.addComment(newComment.id);

    const comment = await Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [
        {
          model: User,
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
      ],
      attributes: DEFAULT_COMMENT_ATTRIBUTES,
    });

    return res.json(comment);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }

    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ PostId: req.params.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
