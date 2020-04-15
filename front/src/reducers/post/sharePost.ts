import { PostInfo } from './index';

export const SHARE_POST_REQUEST = 'SHARE_POST_REQUEST' as const;
export const SHARE_POST_SUCCESS = 'SHARE_POST_SUCCESS' as const;
export const SHARE_POST_FAILURE = 'SHARE_POST_FAILURE' as const;

export interface SharePostRequest {
  type: typeof SHARE_POST_REQUEST;
  postId: number;
}

export interface SharePostSuccess {
  type: typeof SHARE_POST_SUCCESS;
  data: PostInfo;
}

export interface SharePostFailure {
  type: typeof SHARE_POST_FAILURE;
  error: string;
}

export const sharePostRequest = (postId: number): SharePostRequest => ({
  type: SHARE_POST_REQUEST,
  postId,
});

export const sharePostSuccess = (data: PostInfo): SharePostSuccess => ({
  type: SHARE_POST_SUCCESS,
  data,
});

export const sharePostFailure = (error: string): SharePostFailure => ({
  type: SHARE_POST_FAILURE,
  error,
});

export type SharePost = SharePostRequest | SharePostSuccess | SharePostFailure;
