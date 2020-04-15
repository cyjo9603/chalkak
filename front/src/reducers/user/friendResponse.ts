export const FRIEND_RESPONSE_REQUEST = 'FRIEND_RESPONSE_REQUEST' as const;
export const FRIEND_RESPONSE_SUCCESS = 'FRIEND_RESPONSE_SUCCESS' as const;
export const FRIEND_RESPONSE_FAILURE = 'FRIEND_RESPONSE_FAILURE' as const;

export interface FriendResponseRequest {
  type: typeof FRIEND_RESPONSE_REQUEST;
  data: {
    notifyId: number;
    response: boolean;
  };
}

export interface FriendResponseSuccess {
  type: typeof FRIEND_RESPONSE_SUCCESS;
  data: { notifyId: number };
  response: boolean;
}

export interface FriendResponseFailure {
  type: typeof FRIEND_RESPONSE_FAILURE;
  error: string;
}

export const friendResponseRequest = (data: { notifyId: number; response: boolean }): FriendResponseRequest => ({
  type: FRIEND_RESPONSE_REQUEST,
  data,
});

export const friendResponseSuccess = (data: { notifyId: number }, response: boolean): FriendResponseSuccess => ({
  type: FRIEND_RESPONSE_SUCCESS,
  data,
  response,
});

export const friendResponseFailure = (error: string): FriendResponseFailure => ({
  type: FRIEND_RESPONSE_FAILURE,
  error,
});

export type FriendResponse = FriendResponseRequest | FriendResponseSuccess | FriendResponseFailure;
