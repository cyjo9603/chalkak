import { OtherUserInfo } from './index';

export const GET_OTHER_USER_INFO_REQUEST = 'GET_OTHER_USER_INFO_REQUEST' as const;
export const GET_OTHER_USER_INFO_SUCCESS = 'GET_OTHER_USER_INFO_SUCCESS' as const;
export const GET_OTHER_USER_INFO_FAILURE = 'GET_OTHER_USER_INFO_FAILURE' as const;

export interface GetOtherUserInfoRequest {
  type: typeof GET_OTHER_USER_INFO_REQUEST;
  id: number;
}

export interface GetOtherUserInfoSuccess {
  type: typeof GET_OTHER_USER_INFO_SUCCESS;
  data: OtherUserInfo;
}

export interface GetOtherUserInfoFailure {
  type: typeof GET_OTHER_USER_INFO_FAILURE;
  error: string;
}

export const GetOtherUserInfoRequest = (id: number): GetOtherUserInfoRequest => ({
  type: GET_OTHER_USER_INFO_REQUEST,
  id,
});

export const GetOtherUserInfoSuccess = (data: OtherUserInfo): GetOtherUserInfoSuccess => ({
  type: GET_OTHER_USER_INFO_SUCCESS,
  data,
});

export const GetOtherUserInfoFailure = (error: string): GetOtherUserInfoFailure => ({
  type: GET_OTHER_USER_INFO_FAILURE,
  error,
});

export type GetOtherUserInfo = GetOtherUserInfoRequest | GetOtherUserInfoSuccess | GetOtherUserInfoFailure;
