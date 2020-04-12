import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { LOGOUT_REQUEST, logOutSuccess, logOutFailure } from '../../reducers/user/logout';

function logOutAPI() {
  return axios.post('/user/logout', {}, { withCredentials: true });
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put(logOutSuccess());
  } catch (e) {
    console.error(e);
    yield put(logOutFailure(e));
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logOut);
}

export default watchLogout;
