import { PostInfo } from './index';

export const GET_USER_POSTS_REQUEST = 'GET_USER_POSTS_REQUEST' as const;
export const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS' as const;
export const GET_USER_POSTS_FAILURE = 'GET_USER_POSTS_FAILURE' as const;

export interface GetUserPostsRequest {
  type: typeof GET_USER_POSTS_REQUEST;
  userId: number;
  lastUpdatedAt: string;
}

export interface GetUserPostsSuccess {
  type: typeof GET_USER_POSTS_SUCCESS;
  data: PostInfo[];
}

export interface GetUserPostsFailure {
  type: typeof GET_USER_POSTS_FAILURE;
  error: string;
}

export const getUserPostsRequest = (userId: number, lastUpdatedAt = ''): GetUserPostsRequest => ({
  type: GET_USER_POSTS_REQUEST,
  userId,
  lastUpdatedAt,
});

export const getUserPostsSuccess = (data: PostInfo[]): GetUserPostsSuccess => ({
  type: GET_USER_POSTS_SUCCESS,
  data,
});

export const getUserPostsFailure = (error: string): GetUserPostsFailure => ({
  type: GET_USER_POSTS_FAILURE,
  error,
});

export type GetUserPosts = GetUserPostsRequest | GetUserPostsSuccess | GetUserPostsFailure;
