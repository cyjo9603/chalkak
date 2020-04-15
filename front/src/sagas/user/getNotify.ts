import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_NOTIFY_REQUEST, getNotifySuccess, getNotifyFailure } from '../../reducers/user/getNotify';

function getNotifyAPI() {
  return axios.post('/notify', {}, { withCredentials: true });
}

function* getNotify() {
  try {
    const result = yield call(getNotifyAPI);
    yield put(getNotifySuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getNotifyFailure(e));
  }
}

function* watchGetNotify() {
  yield takeLatest(GET_NOTIFY_REQUEST, getNotify);
}

export default watchGetNotify;
