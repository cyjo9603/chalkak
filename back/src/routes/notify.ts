import express from 'express';

import Notify from '../sequelize/models/notify';
import User from '../sequelize/models/user';
import { isLoggedIn } from './middleware';

const REQUEST_FRIEND = 'REQUEST_FRIEND' as const;

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const notify = await Notify.findAll({
      where: {
        targetId: id,
      },
    });

    return res.json(notify);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/friend/request', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const targetId = await User.findOne({
      where: {
        userId: req.body.id,
      },
      attributes: ['id'],
    });

    const exRequest = await Notify.findOrCreate({
      where: {
        notifyType: REQUEST_FRIEND,
        requestorId: id,
        targetId: targetId.id,
      },
    });

    return res.json(exRequest);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/friend/response', isLoggedIn, async (req, res, next) => {
  try {
    const notify = await Notify.findOne({
      where: {
        notifyType: REQUEST_FRIEND,
        id: req.body.notifyId,
      },
    });

    if (!notify) {
      return res.status(400).send('잘못된 요청입니다.');
    }
    const [requestorId, targetId] = [notify.requestorId, notify.targetId];

    await Notify.destroy({
      where: {
        id: req.body.notifyId,
      },
    });

    const requestor = await User.findOne({
      where: {
        id: requestorId,
      },
    });

    const target = await User.findOne({
      where: {
        id: targetId,
      },
    });

    await requestor.addFriend(targetId);
    await target.addFriend(requestorId);

    return res.json({ requestorId, targetId });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
