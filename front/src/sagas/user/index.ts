import { all, fork } from 'redux-saga/effects';

import watchSignUp from './signup';
import watchSignIn from './signin';
import watchLogOut from './logout';

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchSignIn), fork(watchLogOut)]);
}
