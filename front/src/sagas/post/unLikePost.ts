import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  UnLikePostRequest,
  UNLIKE_POST_REQUEST,
  unLikePostSuccess,
  unLikePostFailure,
} from '../../reducers/post/unLikePost';

function unLikePostAPI(postId: number) {
  return axios.delete(`/post/${postId}/like`, { withCredentials: true });
}

function* unLikePost(action: UnLikePostRequest) {
  try {
    const result = yield call(unLikePostAPI, action.postId);
    yield put(unLikePostSuccess(result.data, action.postIndex));
  } catch (e) {
    console.error(e);
    yield put(unLikePostFailure(e));
  }
}

function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unLikePost);
}

export default watchUnLikePost;
