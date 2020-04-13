export const FRIEND_REQUEST_REQUEST = 'FRIEND_REQUEST_REQUEST' as const;
export const FRIEND_REQUEST_SUCCESS = 'FRIEND_REQUEST_SUCCESS' as const;
export const FRIEND_REQUEST_FAILURE = 'FRIEND_REQUEST_FAILURE' as const;

export interface FriendRequestRequest {
  type: typeof FRIEND_REQUEST_REQUEST;
  id: number;
}

export interface FriendRequestSuccess {
  type: typeof FRIEND_REQUEST_SUCCESS;
}

export interface FriendRequestFailure {
  type: typeof FRIEND_REQUEST_FAILURE;
  error: string;
}

export const friendRequestRequest = (id: number): FriendRequestRequest => ({
  type: FRIEND_REQUEST_REQUEST,
  id,
});

export const friendRequestSuccess = (): FriendRequestSuccess => ({
  type: FRIEND_REQUEST_SUCCESS,
});

export const friendRequestFailure = (error: string): FriendRequestFailure => ({
  type: FRIEND_REQUEST_FAILURE,
  error,
});

export type FriendRequest = FriendRequestRequest | FriendRequestSuccess | FriendRequestFailure;
