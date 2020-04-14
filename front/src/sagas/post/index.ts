import { all, fork } from 'redux-saga/effects';

import watchGetAllPosts from './getAllPosts';
import watchWritePost from './writePost';
import watchLikePost from './likePost';

export default function* postSaga() {
  yield all([fork(watchGetAllPosts), fork(watchWritePost), fork(watchLikePost)]);
}
