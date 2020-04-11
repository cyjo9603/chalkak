import produce from 'immer';

import { notifyType, loadingType, LOADING_SIGNUP_SUBMIT } from './values';
import { SignUp, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './signup';

export interface UserInfo {
  id: number;
  familyName: string;
  firstName: string;
  userId: string;
  birth: string;
  gender: string;
  phone: string;
  mail: string;
  profilePhoto: string | null;
  friends: number;
}

export interface UserNotify {
  id: number;
  notifyType: notifyType;
  requestorId: number;
  requestor: {
    familyName: string;
    firstName: string;
  };
}

export interface UserFriends {
  id: number;
  familyName: string;
  firstName: string;
  profilePthoto: string;
  Friend: {
    createdAt: string;
    updatedAt: string;
    UserId: number;
    FriendId: number;
  };
}

export interface OtherUserInfo {
  id: number;
  familyName: string;
  firstName: string;
  profilePhoto: string | null;
  Posts: number;
  Friends: number;
}

export interface UserInitialState {
  info: UserInfo | null;
  notify: UserNotify[] | null;
  Friends: UserFriends[] | null;
  otherUserInfo: UserInitialState | null;
  isLoading: {
    id: number | null;
    name: loadingType | null;
  };
}

const initialState: UserInitialState = {
  info: null,
  notify: null,
  Friends: null,
  otherUserInfo: null,
  isLoading: {
    id: null,
    name: null,
  },
};

type ReducerAction = SignUp;

const user = (state: UserInitialState = initialState, action: ReducerAction) => {
  return produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      // sign up
      case SIGNUP_REQUEST:
        draft.isLoading.name = LOADING_SIGNUP_SUBMIT;
        break;
      case SIGNUP_SUCCESS:
      case SIGNUP_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;

      default:
        break;
    }
  });
};

export default user;
