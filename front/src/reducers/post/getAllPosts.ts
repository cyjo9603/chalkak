import { PostInfo } from './index';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST' as const;
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS' as const;
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE' as const;

export interface GetAllPostsRequest {
  type: typeof GET_ALL_POSTS_REQUEST;
  lastUpdatedAt: string;
}

export interface GetAllPostsSuccess {
  type: typeof GET_ALL_POSTS_SUCCESS;
  data: PostInfo[];
}

export interface GetAllPostsFailure {
  type: typeof GET_ALL_POSTS_FAILURE;
  error: string;
}

export const getAllPostsRequest = (lastUpdatedAt = ''): GetAllPostsRequest => ({
  type: GET_ALL_POSTS_REQUEST,
  lastUpdatedAt,
});

export const getAllPostsSuccess = (data: PostInfo[]): GetAllPostsSuccess => ({
  type: GET_ALL_POSTS_SUCCESS,
  data,
});

export const getAllPostsFailure = (error: string): GetAllPostsFailure => ({
  type: GET_ALL_POSTS_FAILURE,
  error,
});

export type GetAllPosts = GetAllPostsRequest | GetAllPostsSuccess | GetAllPostsFailure;
