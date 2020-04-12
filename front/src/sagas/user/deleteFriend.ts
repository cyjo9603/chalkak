import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  DeleteFriendRequest,
  DELETE_FRIEND_REQUEST,
  deleteFriendSuccess,
  deleteFriendFailure,
} from '../../reducers/user/deleteFriend';

function deleteFriendAPI(deleteId: number) {
  return axios.delete(`/user/friend/${deleteId}`, { withCredentials: true });
}

function* deleteFriend(action: DeleteFriendRequest) {
  try {
    const result = yield call(deleteFriendAPI, action.deleteId);
    yield put(deleteFriendSuccess(parseInt(result.data.friendId, 10)));
  } catch (e) {
    console.error(e);
    yield put(deleteFriendFailure(e));
  }
}

function* watchDeleteFriend() {
  yield takeLatest(DELETE_FRIEND_REQUEST, deleteFriend);
}

export default watchDeleteFriend;
