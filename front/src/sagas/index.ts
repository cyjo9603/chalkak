import axios from 'axios';
import { all, call } from 'redux-saga/effects';

import user from './user/index';
import post from './post/index';

axios.defaults.baseURL = 'http://localhost:3065/api';

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
