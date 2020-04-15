import { UserNotify } from './index';

export const GET_NOTIFY_REQUEST = 'GET_NOTIFY_REQUEST' as const;
export const GET_NOTIFY_SUCCESS = 'GET_NOTIFY_SUCCESS' as const;
export const GET_NOTIFY_FAILURE = 'GET_NOTIFY_FAILURE' as const;

export interface GetNotifyRequest {
  type: typeof GET_NOTIFY_REQUEST;
}

export interface GetNotifySuccess {
  type: typeof GET_NOTIFY_SUCCESS;
  data: UserNotify[];
}

export interface GetNotifyFailure {
  type: typeof GET_NOTIFY_FAILURE;
  error: string;
}

export const getNotifyRequest = (): GetNotifyRequest => ({
  type: GET_NOTIFY_REQUEST,
});

export const getNotifySuccess = (data: UserNotify[]): GetNotifySuccess => ({
  type: GET_NOTIFY_SUCCESS,
  data,
});

export const getNotifyFailure = (error: string): GetNotifyFailure => ({
  type: GET_NOTIFY_FAILURE,
  error,
});

export type GetNotify = GetNotifyRequest | GetNotifySuccess | GetNotifyFailure;
