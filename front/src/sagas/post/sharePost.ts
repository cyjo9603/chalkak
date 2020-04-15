import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  SharePostRequest,
  SHARE_POST_REQUEST,
  sharePostSuccess,
  sharePostFailure,
} from '../../reducers/post/sharePost';

function sharePostAPI(postId: number) {
  return axios.post(`/post/${postId}/share`, {}, { withCredentials: true });
}

function* sharePost(action: SharePostRequest) {
  try {
    const result = yield call(sharePostAPI, action.postId);
    yield put(sharePostSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(sharePostFailure(e));
  }
}

function* watchSharePost() {
  yield takeLatest(SHARE_POST_REQUEST, sharePost);
}

export default watchSharePost;
