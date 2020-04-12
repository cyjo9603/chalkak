import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetFriendsRequest,
  GET_FRIENDS_REQUEST,
  getFriendsSuccess,
  getFriendsFailure,
} from '../../reducers/user/getFriends';

function getFriendsAPI(lastId: number) {
  const limit = 5;
  return axios.post(`/user/friends?lastId=${lastId}&limit=${limit}`, {}, { withCredentials: true });
}

function* getFriends(action: GetFriendsRequest) {
  try {
    const result = yield call(getFriendsAPI, action.lastId);
    yield put(getFriendsSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getFriendsFailure(e));
  }
}

function* watchGetFriends() {
  yield takeLatest(GET_FRIENDS_REQUEST, getFriends);
}

export default watchGetFriends;
