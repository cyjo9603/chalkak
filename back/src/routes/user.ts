import express from 'express';
import bcrypt from 'bcrypt';

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

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
      attributes: ['userId'],
    });
    if (exUser) {
      return res.status(400).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    await User.create({
      familyName: req.body.familyName,
      firstName: req.body.firstName,
      userId: req.body.userId,
      password: hashedPassword,
      phone: req.body.phone,
      mail: req.body.mail,
    });

    return res.json({ result: 'success' });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
