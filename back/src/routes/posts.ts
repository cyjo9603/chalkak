import express from 'express';
import { Op } from 'sequelize';

import Post from '../sequelize/models/post';
import User from '../sequelize/models/user';
import Image from '../sequelize/models/image';

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
          attributes: ['id', 'familyName', 'firstName'],
        },
        {
          model: Image,
        },
        {
          model: User,
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Post,
          as: 'SharePost',
          include: [
            {
              model: User,
              attributes: ['id', 'familyName', 'firstName'],
            },
            {
              model: Image,
            },
          ],
        },
      ],

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
