import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_USER_INFO_REQUEST, getUserInfoSuccess, getUserInfoFailure } from '../../reducers/user/getUserInfo';

function getUserInfoAPI() {
  return axios.get('/user', { withCredentials: true });
}

function* getUserInfo() {
  try {
    const result = yield call(getUserInfoAPI);
    yield put(getUserInfoSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getUserInfoFailure(e));
  }
}

function* watchGetUserInfo() {
  yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
}

export default watchGetUserInfo;
