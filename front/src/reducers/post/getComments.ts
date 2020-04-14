import { CommentInfo } from './index';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST' as const;
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS' as const;
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE' as const;

export interface GetCommentsRequest {
  type: typeof GET_COMMENTS_REQUEST;
  postId: number;
  postIndex: number;
}

export interface GetCommentsSuccess {
  type: typeof GET_COMMENTS_SUCCESS;
  data: CommentInfo[];
  postIndex: number;
}

export interface GetCommentsFailure {
  type: typeof GET_COMMENTS_FAILURE;
  error: string;
}

export const getCommentsRequest = (postId: number, postIndex: number): GetCommentsRequest => ({
  type: GET_COMMENTS_REQUEST,
  postId,
  postIndex,
});

export const getCommentsSuccess = (data: CommentInfo[], postIndex: number): GetCommentsSuccess => ({
  type: GET_COMMENTS_SUCCESS,
  data,
  postIndex,
});

export const getCommentsFailure = (error: string): GetCommentsFailure => ({
  type: GET_COMMENTS_FAILURE,
  error,
});

export type GetComments = GetCommentsRequest | GetCommentsSuccess | GetCommentsFailure;
