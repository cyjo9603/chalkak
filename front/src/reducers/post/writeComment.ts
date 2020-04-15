import { CommentInfo } from './index';

export const WRITE_COMMENT_REQUEST = 'WRITE_COMMENT_REQUEST' as const;
export const WRITE_COMMENT_SUCCESS = 'WRITE_COMMENT_SUCCESS' as const;
export const WRITE_COMMENT_FAILURE = 'WRITE_COMMENT_FAILURE' as const;

export interface WriteCommentRequest {
  type: typeof WRITE_COMMENT_REQUEST;
  content: string;
  postId: number;
  postIndex: number;
}

export interface WriteCommentSuccess {
  type: typeof WRITE_COMMENT_SUCCESS;
  data: CommentInfo;
  postIndex: number;
}

export interface WriteCommentFailure {
  type: typeof WRITE_COMMENT_FAILURE;
  error: string;
}

export const writeCommentRequest = (content: string, postId: number, postIndex: number): WriteCommentRequest => ({
  type: WRITE_COMMENT_REQUEST,
  content,
  postId,
  postIndex,
});

export const writeCommentSuccess = (data: CommentInfo, postIndex: number): WriteCommentSuccess => ({
  type: WRITE_COMMENT_SUCCESS,
  data,
  postIndex,
});

export const writeCommentFailure = (error: string): WriteCommentFailure => ({
  type: WRITE_COMMENT_FAILURE,
  error,
});

export type WriteComment = WriteCommentRequest | WriteCommentSuccess | WriteCommentFailure;
