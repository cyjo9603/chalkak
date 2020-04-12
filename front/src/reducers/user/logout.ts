export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE' as const;

export interface LogOutRequest {
  type: typeof LOGOUT_REQUEST;
}

export interface LogOutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogOutFailure {
  type: typeof LOGOUT_FAILURE;
  error: string;
}

export const logOutRequest = (): LogOutRequest => ({
  type: LOGOUT_REQUEST,
});

export const logOutSuccess = (): LogOutSuccess => ({
  type: LOGOUT_SUCCESS,
});

export const logOutFailure = (error: string): LogOutFailure => ({
  type: LOGOUT_FAILURE,
  error,
});

export type LogOut = LogOutRequest | LogOutSuccess | LogOutFailure;
