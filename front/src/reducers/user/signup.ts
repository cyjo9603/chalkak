export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' as const;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE' as const;

export interface SignUpData {
  userId: string;
  password: string;
  familyName: string;
  firstName: string;
  birth: string;
  gender: string;
  phone: string;
  mail: string;
}

export interface SignUpRequest {
  type: typeof SIGNUP_REQUEST;
  data: SignUpData;
}

export interface SignUpSuccess {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignUpFailure {
  type: typeof SIGNUP_FAILURE;
  error: string;
}

export const signUpRequest = (data: SignUpData) => ({
  type: SIGNUP_REQUEST,
  data,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
  type: SIGNUP_FAILURE,
  error,
});

export type SignUp = SignUpRequest | SignUpSuccess | SignUpFailure;
