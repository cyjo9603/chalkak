export const DELETE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST' as const;
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS' as const;
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE' as const;

export interface DeleteFriendRequest {
  type: typeof DELETE_FRIEND_REQUEST;
  deleteId: number;
}

export interface DeleteFriendSuccess {
  type: typeof DELETE_FRIEND_SUCCESS;
  deleteId: number;
}

export interface DeleteFriendFailure {
  type: typeof DELETE_FRIEND_FAILURE;
  error: string;
}

export const deleteFriendRequest = (deleteId: number): DeleteFriendRequest => ({
  type: DELETE_FRIEND_REQUEST,
  deleteId,
});

export const deleteFriendSuccess = (deleteId: number): DeleteFriendSuccess => ({
  type: DELETE_FRIEND_SUCCESS,
  deleteId,
});

export const deleteFriendFailure = (error: string): DeleteFriendFailure => ({
  type: DELETE_FRIEND_FAILURE,
  error,
});

export type DeleteFriend = DeleteFriendRequest | DeleteFriendSuccess | DeleteFriendFailure;
