export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE' as const;

export interface LikePostRequest {
  type: typeof LIKE_POST_REQUEST;
  postId: number;
  postIndex: number;
}

export interface LikePostSuccess {
  type: typeof LIKE_POST_SUCCESS;
  data: { id: number };
  postIndex: number;
}

export interface LikePostFailure {
  type: typeof LIKE_POST_FAILURE;
  error: string;
}

export const likePostRequest = (postId: number, postIndex: number): LikePostRequest => ({
  type: LIKE_POST_REQUEST,
  postId,
  postIndex,
});

export const likePostSuccess = (data: { id: number }, postIndex: number): LikePostSuccess => ({
  type: LIKE_POST_SUCCESS,
  data,
  postIndex,
});

export const likePostFailure = (error: string): LikePostFailure => ({
  type: LIKE_POST_FAILURE,
  error,
});

export type LikePost = LikePostRequest | LikePostSuccess | LikePostFailure;
