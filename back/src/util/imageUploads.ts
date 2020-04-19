import multer from 'multer';
import path from 'path';
import AWS from 'aws-sdk';
import multerS3 from 'multer-s3';

AWS.config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

export default multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'chalkak',
    key(req, file, cb) {
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});
