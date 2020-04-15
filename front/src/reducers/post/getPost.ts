import { PostInfo } from './index';

export const GET_POST_REQUEST = 'GET_POST_REQUEST' as const;
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
export const GET_POST_FAILURE = 'GET_POST_FAILURE' as const;

export interface GetPostRequest {
  type: typeof GET_POST_REQUEST;
  postId: number;
}

export interface GetPostSuccess {
  type: typeof GET_POST_SUCCESS;
  data: PostInfo;
}

export interface GetPostFailure {
  type: typeof GET_POST_FAILURE;
  error: string;
}

export const getPostRequest = (postId: number): GetPostRequest => ({
  type: GET_POST_REQUEST,
  postId,
});

export const getPostSuccess = (data: PostInfo): GetPostSuccess => ({
  type: GET_POST_SUCCESS,
  data,
});

export const getPostFailure = (error: string): GetPostFailure => ({
  type: GET_POST_FAILURE,
  error,
});

export type GetPost = GetPostRequest | GetPostSuccess | GetPostFailure;
