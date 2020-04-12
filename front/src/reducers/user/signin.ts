import { UserInfo } from './index';

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST' as const;
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS' as const;
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE' as const;

export interface SignInData {
  userId: string;
  password: string;
}

export interface SignInRequest {
  type: typeof SIGNIN_REQUEST;
  data: SignInData;
}

export interface SignInSuccess {
  type: typeof SIGNIN_SUCCESS;
  data: UserInfo;
}

export interface SignInFailure {
  type: typeof SIGNIN_FAILURE;
  error: string;
}

export const signInRequest = (data: SignInData): SignInRequest => ({
  type: SIGNIN_REQUEST,
  data,
});

export const signInSuccess = (data: UserInfo): SignInSuccess => ({
  type: SIGNIN_SUCCESS,
  data,
});

export const signInFailure = (error: string): SignInFailure => ({
  type: SIGNIN_FAILURE,
  error,
});

export type SignIn = SignInRequest | SignInSuccess | SignInFailure;
