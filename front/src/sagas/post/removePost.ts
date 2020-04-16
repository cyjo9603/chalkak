import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  RemovePostRequest,
  REMOVE_POST_REQUEST,
  removePostSuccess,
  removePostFailure,
} from '../../reducers/post/removePost';

function removePostAPI(postId) {
  return axios.delete(`/post/${postId}`, { withCredentials: true });
}

function* removePost(action: RemovePostRequest) {
  try {
    yield call(removePostAPI, action.postId);
    yield put(removePostSuccess(action.postIndex));
  } catch (e) {
    console.error(e);
    yield put(removePostFailure(e));
  }
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default watchRemovePost;
