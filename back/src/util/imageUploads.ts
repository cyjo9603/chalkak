import multer from 'multer';
import path from 'path';

export default multer({
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
