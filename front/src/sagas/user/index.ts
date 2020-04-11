import { all, fork } from 'redux-saga/effects';

import watchSignUp from './signup';

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
