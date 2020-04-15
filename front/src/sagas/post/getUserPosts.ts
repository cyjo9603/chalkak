import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetUserPostsRequest,
  GET_USER_POSTS_REQUEST,
  getUserPostsSuccess,
  getUserPostsFailure,
} from '../../reducers/post/getUserPosts';

function getUserPostsAPI(userId: number, lastUpdatedAt: string) {
  const limit = 10;
  if (lastUpdatedAt === '') {
    return axios.get(`/user/${userId}/posts?limit=${limit}`);
  }
  return axios.get(`/user/${userId}/posts?limit=${limit}&lastUpdatedAt=${lastUpdatedAt}`);
}

function* getUserPosts(action: GetUserPostsRequest) {
  try {
    const result = yield call(getUserPostsAPI, action.userId, action.lastUpdatedAt);
    yield put(getUserPostsSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getUserPostsFailure(e));
  }
}

function* watchGetUserPosts() {
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPosts);
}

export default watchGetUserPosts;
