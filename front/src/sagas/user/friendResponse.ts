import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  FriendResponseRequest,
  FRIEND_RESPONSE_REQUEST,
  friendResponseSuccess,
  friendResponseFailure,
} from '../../reducers/user/friendResponse';

function friendResponseAPI(data: { notifyId: number; response: boolean }) {
  return axios.post('/notify/friend/response', data, { withCredentials: true });
}

function* friendResponse(action: FriendResponseRequest) {
  try {
    const result = yield call(friendResponseAPI, action.data);
    yield put(friendResponseSuccess(result.data, action.data.response));
  } catch (e) {
    console.error(e);
    yield put(friendResponseFailure(e));
  }
}

function* watchFriendResponse() {
  yield takeLatest(FRIEND_RESPONSE_REQUEST, friendResponse);
}

export default watchFriendResponse;
