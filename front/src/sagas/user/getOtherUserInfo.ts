import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GetOtherUserInfoRequest,
  GET_OTHER_USER_INFO_REQUEST,
  GetOtherUserInfoSuccess,
  GetOtherUserInfoFailure,
} from '../../reducers/user/getOtherUserInfo';

function getOtherUserInfoAPI(id: number) {
  return axios.get(`/user/${id}`);
}

function* getOtherUserInfo(action: GetOtherUserInfoRequest) {
  try {
    const result = yield call(getOtherUserInfoAPI, action.id);
    yield put(GetOtherUserInfoSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(GetOtherUserInfoFailure(e));
  }
}

function* watchGetOtherUserInfo() {
  yield takeLatest(GET_OTHER_USER_INFO_REQUEST, getOtherUserInfo);
}

export default watchGetOtherUserInfo;
