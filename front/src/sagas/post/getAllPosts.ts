import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetAllPostsRequest,
  GET_ALL_POSTS_REQUEST,
  getAllPostsSuccess,
  getAllPostsFailure,
} from '../../reducers/post/getAllPosts';

function getAllPostsAPI(lastUpdatedAt: string) {
  const limit = 10;
  if (lastUpdatedAt === '') {
    return axios.get(`/posts?limit=${limit}`);
  }
  return axios.get(`/posts?limit=${limit}&lastUpdatedAt=${lastUpdatedAt}`);
}

function* getAllPosts(action: GetAllPostsRequest) {
  try {
    const result = yield call(getAllPostsAPI, action.lastUpdatedAt);
    yield put(getAllPostsSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getAllPostsFailure(e));
  }
}

function* watchGetAllPosts() {
  yield takeLatest(GET_ALL_POSTS_REQUEST, getAllPosts);
}

export default watchGetAllPosts;
