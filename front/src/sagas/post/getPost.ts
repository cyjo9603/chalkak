import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { GetPostRequest, GET_POST_REQUEST, getPostSuccess, getPostFailure } from '../../reducers/post/getPost';

function getPostAPI(postId: number) {
  return axios.get(`/post/${postId}`);
}

function* getPost(action: GetPostRequest) {
  try {
    const result = yield call(getPostAPI, action.postId);
    yield put(getPostSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getPostFailure(e));
  }
}

function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, getPost);
}

export default watchGetPost;
