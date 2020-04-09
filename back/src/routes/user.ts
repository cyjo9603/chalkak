import express from 'express';
import bcrypt from 'bcrypt';

import passport from 'passport';
import User from '../sequelize/models/user';
import { isNotLoggedIn, isLoggedIn } from './middleware';
import Post from '../sequelize/models/post';

const router = express.Router();

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const fullUser = await User.findOne({
      where: { id },
      include: [
        {
          model: Post,
          as: 'Posts',
          attributes: ['id'],
        },
        {
          model: User,
          as: 'Friends',
          attributes: ['id'],
        },
      ],
      attributes: ['id', 'familyName', 'firstName', 'userId', 'phone', 'mail'],
    });
    return res.json(fullUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: parseInt(req.params.id, 10),
      },
      include: [
        {
          model: Post,
          as: 'Posts',
          attributes: ['id'],
        },
        {
          model: User,
          as: 'Friends',
          attributes: ['id'],
        },
      ],
      attributes: ['id', 'familyName', 'firstName'],
    });

    const jsonUser = user.toJSON();
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
    jsonUser.Friends = jsonUser.Friends ? jsonUser.Friends.length : 0;

    return res.json(jsonUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

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

router.post('/signin', isNotLoggedIn, async (req, res, next) => {
  try {
    passport.authenticate('local', (e, user, info) => {
      if (e) {
        return next(e);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await User.findOne({
          where: { id: user.id },
          include: [
            {
              model: Post,
              as: 'Posts',
              attributes: ['id'],
            },
          ],
          attributes: ['id', 'familyName', 'firstName'],
        });
        return res.json(fullUser);
      });
    })(req, res, next);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  if (req.session) {
    req.session.destroy((e) => {
      console.error(e);
    });
  }
  res.send('logout success');
});

export default router;
