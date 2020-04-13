import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  FriendRequestRequest,
  FRIEND_REQUEST_REQUEST,
  friendRequestSuccess,
  friendRequestFailure,
} from '../../reducers/user/friendRequest';

function friendRequestAPI(id: number) {
  return axios.post('/notify/friend/request', { id }, { withCredentials: true });
}

function* friendRequest(action: FriendRequestRequest) {
  try {
    yield call(friendRequestAPI, action.id);
    yield put(friendRequestSuccess());
  } catch (e) {
    console.error(e);
    yield put(friendRequestFailure(e));
  }
}

function* watchFriendRequest() {
  yield takeLatest(FRIEND_REQUEST_REQUEST, friendRequest);
}

export default watchFriendRequest;
