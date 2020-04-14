import { PostInfo } from './index';

export const WRITE_POST_REQUEST = 'WRITE_POST_REQUEST' as const;
export const WRITE_POST_SUCCESS = 'WRITE_POST_SUCCESS' as const;
export const WRITE_POST_FAILURE = 'WRITE_POST_FAILURE' as const;

export interface WritePostContent {
  content: string;
  image?: string[];
}

export interface WritePostRequest {
  type: typeof WRITE_POST_REQUEST;
  data: WritePostContent;
}

export interface WritePostSuccess {
  type: typeof WRITE_POST_SUCCESS;
  data: PostInfo;
}

export interface WritePostFailure {
  type: typeof WRITE_POST_FAILURE;
  error: string;
}

export const writePostRequest = (data: WritePostContent): WritePostRequest => ({
  type: WRITE_POST_REQUEST,
  data,
});

export const writePostSuccess = (data: PostInfo): WritePostSuccess => ({
  type: WRITE_POST_SUCCESS,
  data,
});

export const writePostFailure = (error: string): WritePostFailure => ({
  type: WRITE_POST_FAILURE,
  error,
});

export type WritePost = WritePostRequest | WritePostSuccess | WritePostFailure;
