import express from 'express';
import multer from 'multer';
import path from 'path';

import Post from '../sequelize/models/post';

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

router.get('/', async (req, res, next) => {});

export default router;
