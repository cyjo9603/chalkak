import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import passport from 'passport';
import hpp from 'hpp';
import helmet from 'helmet';

import { sequelize } from '../models';
import passportConfig from './passport';
import hashtagAPIRouter from './routes/hashtag';
import notifyAPIRouter from './routes/notify';
import postAPIRouter from './routes/post';
import postsAPIRouter from './routes/posts';
import userAPIRouter from './routes/user';

dotenv.config();
passportConfig();

const app = express();
const prod = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3065);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db connect success');
  })
  .catch((err: Error) => {
    console.error(err);
  });

if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(
    cors({
      origin: /3\.34\.70\.123$/,
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: prod ? 'domainname.com' : undefined,
    },
    name: 'cksnks',
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// router
app.use('/api/hashtag', hashtagAPIRouter);
app.use('/api/notify', notifyAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/user', userAPIRouter);

// server start
app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
});
