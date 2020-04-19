import axios from 'axios';
import { all, call } from 'redux-saga/effects';

import user from './user/index';
import post from './post/index';
import SERVER_URL from '../util/config';

axios.defaults.baseURL = SERVER_URL;

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
