import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { SignInRequest, SignInData, SIGNIN_REQUEST, signInSuccess, signInFailure } from '../../reducers/user/signin';

function signInAPI(signInData: SignInData) {
  return axios.post('/user/signin', signInData, { withCredentials: true });
}

function* signIn(action: SignInRequest) {
  try {
    const result = yield call(signInAPI, action.data);
    yield put(signInSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(signInFailure(e));
  }
}

function* watchSignIn() {
  yield takeLatest(SIGNIN_REQUEST, signIn);
}

export default watchSignIn;
