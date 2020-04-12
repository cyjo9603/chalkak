import { UserFriends } from './index';

export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST' as const;
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS' as const;
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE' as const;

export interface GetFriendsRequest {
  type: typeof GET_FRIENDS_REQUEST;
  lastId: number;
}

export interface GetFriendsSuccess {
  type: typeof GET_FRIENDS_SUCCESS;
  data: UserFriends[];
}

export interface GetFriendsFailure {
  type: typeof GET_FRIENDS_FAILURE;
  error: string;
}

export const getFriendsRequest = (lastId = 0): GetFriendsRequest => ({
  type: GET_FRIENDS_REQUEST,
  lastId,
});

export const getFriendsSuccess = (data: UserFriends[]): GetFriendsSuccess => ({
  type: GET_FRIENDS_SUCCESS,
  data,
});

export const getFriendsFailure = (error: string): GetFriendsFailure => ({
  type: GET_FRIENDS_FAILURE,
  error,
});

export type GetFriends = GetFriendsRequest | GetFriendsSuccess | GetFriendsFailure;
