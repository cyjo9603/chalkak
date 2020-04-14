import { all, fork } from 'redux-saga/effects';

import watchGetAllPosts from './getAllPosts';

export default function* postSaga() {
  yield all([fork(watchGetAllPosts)]);
}
