import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetHashtagPostsRequest,
  GET_HASHTAG_POSTS_REQUEST,
  getHashtagPostsSuccess,
  getHashtagPostsFailure,
} from '../../reducers/post/getHashtagPosts';

function getHashtagPostsAPI(tagName: string, lastUpdatedAt: string) {
  const limit = 10;
  if (lastUpdatedAt === '') {
    return axios.get(`/hashtag/${tagName}?limit=${limit}`);
  }
  return axios.get(`/hashtag/${tagName}?limit=${limit}&lastUpdatedAt=${lastUpdatedAt}`);
}

function* getHashtagPosts(action: GetHashtagPostsRequest) {
  try {
    const result = yield call(getHashtagPostsAPI, action.tagName, action.lastUpdatedAt);
    yield put(getHashtagPostsSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getHashtagPostsFailure(e));
  }
}

function* watchGetHashtagPosts() {
  yield takeLatest(GET_HASHTAG_POSTS_REQUEST, getHashtagPosts);
}

export default watchGetHashtagPosts;
