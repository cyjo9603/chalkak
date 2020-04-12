import { UserInfo } from './index';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST' as const;
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS' as const;
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE' as const;

export interface GetUserInfoRequest {
  type: typeof GET_USER_INFO_REQUEST;
}

export interface GetUserInfoSuccess {
  type: typeof GET_USER_INFO_SUCCESS;
  data: UserInfo;
}

export interface GetUserInfoFailure {
  type: typeof GET_USER_INFO_FAILURE;
  error: string;
}

export const getUserInfoRequest = (): GetUserInfoRequest => ({
  type: GET_USER_INFO_REQUEST,
});

export const getUserInfoSuccess = (data: UserInfo): GetUserInfoSuccess => ({
  type: GET_USER_INFO_SUCCESS,
  data,
});

export const getUserInfoFailure = (error: string): GetUserInfoFailure => ({
  type: GET_USER_INFO_FAILURE,
  error,
});

export type GetUserInfo = GetUserInfoRequest | GetUserInfoSuccess | GetUserInfoFailure;
