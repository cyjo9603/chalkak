import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { SignUpRequest, SignUpData, SIGNUP_REQUEST, signUpSuccess, signUpFailure } from '../../reducers/user/signup';

function signUpAPI(signUpData: SignUpData) {
  return axios.post('/user/signup', signUpData);
}

function* signUp(action: SignUpRequest) {
  try {
    yield call(signUpAPI, action.data);
    yield put(signUpSuccess());
  } catch (e) {
    console.error(e);
    yield put(signUpFailure(e));
  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default watchSignUp;
