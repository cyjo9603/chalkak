import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  WritePostContent,
  WritePostRequest,
  WRITE_POST_REQUEST,
  writePostSuccess,
  writePostFailure,
} from '../../reducers/post/writePost';

function writePostAPI(data: WritePostContent) {
  return axios.post('/post/upload', data, { withCredentials: true });
}

function* writePost(action: WritePostRequest) {
  try {
    const result = yield call(writePostAPI, action.data);
    yield put(writePostSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(writePostFailure(e));
  }
}

function* watchWritePost() {
  yield takeLatest(WRITE_POST_REQUEST, writePost);
}

export default watchWritePost;
