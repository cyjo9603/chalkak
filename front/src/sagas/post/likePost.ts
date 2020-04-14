import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { LikePostRequest, LIKE_POST_REQUEST, likePostSuccess, likePostFailure } from '../../reducers/post/likePost';

function likePostAPI(postId: number) {
  return axios.post(`/post/${postId}/like`, {}, { withCredentials: true });
}

function* likePost(action: LikePostRequest) {
  try {
    const result = yield call(likePostAPI, action.postId);
    yield put(likePostSuccess(result.data, action.postIndex));
  } catch (e) {
    console.error(e);
    yield put(likePostFailure(e));
  }
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

export default watchLikePost;
