import express from 'express';
import { Op } from 'sequelize';

import Post, { DEFAULT_POST_ATTRIBUTES } from '../sequelize/models/post';
import User, { DEFAULT_USER_ATTRIBUTES } from '../sequelize/models/user';
import Image, { DEFAULT_IMAGE_ATTRIBUTES } from '../sequelize/models/image';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let where = {};
    if (req.query.lastUpdatedAt) {
      where = {
        updatedAt: {
          [Op.lt]: new Date(req.query.lastUpdatedAt),
        },
      };
    }

    const posts = await Post.findAll({
      where,
      include: [
        {
          model: User,
          attributes: DEFAULT_USER_ATTRIBUTES,
        },
        {
          model: Image,
          attributes: DEFAULT_IMAGE_ATTRIBUTES,
        },
        {
          model: User,
          as: 'Likers',
          attributes: ['id'],
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
      order: [['updatedAt', 'DESC']],
      limit: parseInt(req.query.limit, 10),
    });

    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
