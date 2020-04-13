export const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST' as const;
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS' as const;
export const UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE' as const;

export interface UpdateInfo {
  familyName?: string;
  firstName?: string;
  birth?: string;
  phone?: string;
  mail?: string;
  profilePhoto?: string;
}

export interface UpdateUserInfoRequest {
  type: typeof UPDATE_USER_INFO_REQUEST;
  data: UpdateInfo;
}

export interface UpdateUserInfoSuccess {
  type: typeof UPDATE_USER_INFO_SUCCESS;
  data: UpdateInfo;
}

export interface UpdateUserInfoFailure {
  type: typeof UPDATE_USER_INFO_FAILURE;
  error: string;
}

export const updateUserInfoRequest = (data: UpdateInfo): UpdateUserInfoRequest => ({
  type: UPDATE_USER_INFO_REQUEST,
  data,
});

export const updateUserInfoSuccess = (data: UpdateInfo): UpdateUserInfoSuccess => ({
  type: UPDATE_USER_INFO_SUCCESS,
  data,
});

export const updateUserInfoFailure = (error: string): UpdateUserInfoFailure => ({
  type: UPDATE_USER_INFO_FAILURE,
  error,
});

export type UpdateUserInfo = UpdateUserInfoRequest | UpdateUserInfoSuccess | UpdateUserInfoFailure;
