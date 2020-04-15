import { PostInfo } from './index';

export const GET_HASHTAG_POSTS_REQUEST = 'GET_HASHTAG_POSTS_REQUEST' as const;
export const GET_HASHTAG_POSTS_SUCCESS = 'GET_HASHTAG_POSTS_SUCCESS' as const;
export const GET_HASHTAG_POSTS_FAILURE = 'GET_HASHTAG_POSTS_FAILURE' as const;

export interface GetHashtagPostsRequest {
  type: typeof GET_HASHTAG_POSTS_REQUEST;
  tagName: string;
  lastUpdatedAt: string;
}

export interface GetHashtagPostsSuccess {
  type: typeof GET_HASHTAG_POSTS_SUCCESS;
  data: PostInfo[];
}

export interface GetHashtagPostsFailure {
  type: typeof GET_HASHTAG_POSTS_FAILURE;
  error: string;
}

export const getHashtagPostsRequest = (tagName: string, lastUpdatedAt = ''): GetHashtagPostsRequest => ({
  type: GET_HASHTAG_POSTS_REQUEST,
  tagName,
  lastUpdatedAt,
});

export const getHashtagPostsSuccess = (data: PostInfo[]): GetHashtagPostsSuccess => ({
  type: GET_HASHTAG_POSTS_SUCCESS,
  data,
});

export const getHashtagPostsFailure = (error: string): GetHashtagPostsFailure => ({
  type: GET_HASHTAG_POSTS_FAILURE,
  error,
});

export type GetHashtagPosts = GetHashtagPostsRequest | GetHashtagPostsSuccess | GetHashtagPostsFailure;
