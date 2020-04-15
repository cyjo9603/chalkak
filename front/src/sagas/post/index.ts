import { all, fork } from 'redux-saga/effects';

import watchGetAllPosts from './getAllPosts';
import watchWritePost from './writePost';
import watchLikePost from './likePost';
import watchUnLikePost from './unLikePost';
import watchGetComments from './getComments';
import watchGetUserPosts from './getUserPosts';
import watchGetPost from './getPost';
import watchWriteComment from './writeComment';
import watchGetHashtagPosts from './getHashtagPosts';
import watchSharePost from './sharePost';

export default function* postSaga() {
  yield all([
    fork(watchGetAllPosts),
    fork(watchWritePost),
    fork(watchLikePost),
    fork(watchUnLikePost),
    fork(watchGetComments),
    fork(watchGetUserPosts),
    fork(watchGetPost),
    fork(watchWriteComment),
    fork(watchWriteComment),
    fork(watchGetHashtagPosts),
    fork(watchSharePost),
  ]);
}
