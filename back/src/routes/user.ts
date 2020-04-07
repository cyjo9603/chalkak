import express from 'express';

import User from '../sequelize/models/user';
import { isNotLoggedIn } from './middleware';

const router = express.Router();

router.get('/', async (req, res, next) => {});

router.post('/idcheck', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
      attributes: ['userId'],
    });
    return res.json({ exUser });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
