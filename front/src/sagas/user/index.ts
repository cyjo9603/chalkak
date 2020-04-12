import { all, fork } from 'redux-saga/effects';

import watchSignUp from './signup';
import watchSignIn from './signin';
import watchLogOut from './logout';
import watchGetUserInfo from './getUserInfo';
import watchGetFriends from './getFriends';
import watchDeleteFriend from './deleteFriend';

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchSignIn),
    fork(watchLogOut),
    fork(watchGetUserInfo),
    fork(watchGetFriends),
    fork(watchDeleteFriend),
  ]);
}
