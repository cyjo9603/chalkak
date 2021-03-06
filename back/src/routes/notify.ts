import express from 'express';

import Notify from '../../models/notify';
import User from '../../models/user';
import { isLoggedIn } from './middleware';

const NOTIFY_REQUEST_FRIEND = 'NOTIFY_REQUEST_FRIEND' as const;

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.user as User;
    const notify = await Notify.findAll({
      where: {
        targetId: id,
      },
      include: [
        {
          model: User,
          as: 'requestor',
          attributes: ['familyName', 'firstName'],
        },
      ],
      attributes: ['id', 'notifyType', 'requestorId'],
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

    const exRequest = await Notify.findOrCreate({
      where: {
        notifyType: NOTIFY_REQUEST_FRIEND,
        requestorId: id,
        targetId: req.body.id,
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
        notifyType: NOTIFY_REQUEST_FRIEND,
        id: req.body.notifyId,
      },
    });

    if (!notify) {
      return res.status(400).send('잘못된 요청입니다.');
    }
    const { requestorId, targetId } = notify;

    await Notify.destroy({
      where: {
        id: req.body.notifyId,
      },
    });

    if (!req.body.response) {
      return res.json({ notifyId: req.body.notifyId });
    }

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

    return res.json({ notifyId: req.body.notifyId });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
