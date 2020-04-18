import Comment, { associate as associateComment } from './comment';
import Hashtag, { associate as associateHashtag } from './hashtag';
import Image, { associate as associateImage } from './image';
import Notify, { associate as associateNotify } from './notify';
import Post, { associate as associatePost } from './post';
import User, { associate as associateUser } from './user';

export * from './sequelize';

const db = {
  Comment,
  Hashtag,
  Image,
  Notify,
  Post,
  User,
};

export type dbType = typeof db;

associateComment(db);
associateHashtag(db);
associateImage(db);
associateNotify(db);
associatePost(db);
associateUser(db);
