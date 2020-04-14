export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST' as const;
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS' as const;
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE' as const;

export interface UnLikePostRequest {
  type: typeof UNLIKE_POST_REQUEST;
  postId: number;
  postIndex: number;
}

export interface UnLikePostSuccess {
  type: typeof UNLIKE_POST_SUCCESS;
  data: { id: number };
  postIndex: number;
}

export interface UnLikePostFailure {
  type: typeof UNLIKE_POST_FAILURE;
  error: string;
}

export const unLikePostRequest = (postId: number, postIndex: number): UnLikePostRequest => ({
  type: UNLIKE_POST_REQUEST,
  postId,
  postIndex,
});

export const unLikePostSuccess = (data: { id: number }, postIndex: number): UnLikePostSuccess => ({
  type: UNLIKE_POST_SUCCESS,
  data,
  postIndex,
});

export const unLikePostFailure = (error: string): UnLikePostFailure => ({
  type: UNLIKE_POST_FAILURE,
  error,
});

export type UnLikePost = UnLikePostRequest | UnLikePostSuccess | UnLikePostFailure;
