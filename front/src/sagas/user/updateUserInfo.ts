import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  UpdateInfo,
  UpdateUserInfoRequest,
  UPDATE_USER_INFO_REQUEST,
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from '../../reducers/user/updateUserInfo';

function updateUserInfoAPI(data: UpdateInfo) {
  return axios.patch('/user/info', data, { withCredentials: true });
}

function* updateUserInfo(action: UpdateUserInfoRequest) {
  try {
    const result = yield call(updateUserInfoAPI, action.data);
    yield put(updateUserInfoSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(updateUserInfoFailure(e));
  }
}

function* watchUpdateUserInfo() {
  yield takeLatest(UPDATE_USER_INFO_REQUEST, updateUserInfo);
}

export default watchUpdateUserInfo;
