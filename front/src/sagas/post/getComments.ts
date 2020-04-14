import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetCommentsRequest,
  GET_COMMENTS_REQUEST,
  getCommentsSuccess,
  getCommentsFailure,
} from '../../reducers/post/getComments';

function getCommentsAPI(postId: number) {
  return axios.get(`/post/${postId}/comments`);
}

function* getComments(action: GetCommentsRequest) {
  try {
    const result = yield call(getCommentsAPI, action.postId);
    yield put(getCommentsSuccess(result.data, action.postIndex));
  } catch (e) {
    console.error(e);
    yield put(getCommentsFailure(e));
  }
}

function* watchGetComments() {
  yield takeLatest(GET_COMMENTS_REQUEST, getComments);
}

export default watchGetComments;
