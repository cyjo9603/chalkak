import express from 'express';

import Notify from '../sequelize/models/notify';
import User from '../sequelize/models/user';
import { isLoggedIn } from './middleware';

const REQUEST_FRIEND = 'REQUEST_FRIEND' as const;

const router = express.Router();

router.post('/friend/request', isLoggedIn, async (req, res) => {
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
});

export default router;
