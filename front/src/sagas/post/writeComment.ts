import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  WriteCommentRequest,
  WRITE_COMMENT_REQUEST,
  writeCommentSuccess,
  writeCommentFailure,
} from '../../reducers/post/writeComment';

function writeCommentAPI(content: string, postId: number) {
  return axios.post(`/post/${postId}/comment`, { content }, { withCredentials: true });
}

function* writeComment(action: WriteCommentRequest) {
  try {
    const result = yield call(writeCommentAPI, action.content, action.postId);
    yield put(writeCommentSuccess(result.data, action.postIndex));
  } catch (e) {
    console.error(e);
    yield put(writeCommentFailure(e));
  }
}

function* watchWriteComment() {
  yield takeLatest(WRITE_COMMENT_REQUEST, writeComment);
}

export default watchWriteComment;
