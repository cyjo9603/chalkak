export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE' as const;

export interface RemovePostRequest {
  type: typeof REMOVE_POST_REQUEST;
  postId: number;
  postIndex: number;
}

export interface RemovePostSuccess {
  type: typeof REMOVE_POST_SUCCESS;
  postIndex: number;
}

export interface RemovePostFailure {
  type: typeof REMOVE_POST_FAILURE;
  error: string;
}

export const removePostRequest = (postId: number, postIndex: number): RemovePostRequest => ({
  type: REMOVE_POST_REQUEST,
  postId,
  postIndex,
});

export const removePostSuccess = (postIndex: number): RemovePostSuccess => ({
  type: REMOVE_POST_SUCCESS,
  postIndex,
});

export const removePostFailure = (error: string): RemovePostFailure => ({
  type: REMOVE_POST_FAILURE,
  error,
});

export type RemovePost = RemovePostRequest | RemovePostSuccess | RemovePostFailure;
