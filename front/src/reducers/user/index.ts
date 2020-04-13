import produce from 'immer';

import {
  notifyType,
  loadingType,
  LOADING_SIGNUP_SUBMIT,
  LOADING_SIGNIN_SUBMIT,
  LOADING_LOGOUT,
  LOADING_DELETE_FRIEND,
} from './values';
import { SignUp, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './signup';
import { SignIn, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from './signin';
import { LogOut, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './logout';
import { GetUserInfo, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE } from './getUserInfo';
import { GetFriends, GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE } from './getFriends';
import { DeleteFriend, DELETE_FRIEND_REQUEST, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE } from './deleteFriend';
import {
  UpdateUserInfo,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from './updateUserInfo';
import {
  GetOtherUserInfo,
  GET_OTHER_USER_INFO_REQUEST,
  GET_OTHER_USER_INFO_SUCCESS,
  GET_OTHER_USER_INFO_FAILURE,
} from './getOtherUserInfo';

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
  otherUserInfo: OtherUserInfo | null;
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

type ReducerAction =
  | SignUp
  | SignIn
  | LogOut
  | GetUserInfo
  | GetFriends
  | DeleteFriend
  | UpdateUserInfo
  | GetOtherUserInfo;

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

      // sign in
      case SIGNIN_REQUEST:
        draft.isLoading.name = LOADING_SIGNIN_SUBMIT;
        break;
      case SIGNIN_SUCCESS:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        draft.info = action.data;
        break;
      case SIGNIN_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;

      // logout
      case LOGOUT_REQUEST:
        draft.isLoading.name = LOADING_LOGOUT;
        break;
      case LOGOUT_SUCCESS:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        draft.info = null;
        draft.Friends = null;
        draft.notify = null;
        break;
      case LOGOUT_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;

      // get user info
      case GET_USER_INFO_REQUEST:
      case GET_USER_INFO_FAILURE:
        break;
      case GET_USER_INFO_SUCCESS:
        draft.info = action.data;
        break;

      // get friends
      case GET_FRIENDS_REQUEST:
        if (action.lastId === 0) {
          draft.Friends = null;
        }
        break;
      case GET_FRIENDS_SUCCESS:
        if (draft.Friends === null) {
          draft.Friends = [];
        }
        draft.Friends.push(...action.data);
        break;
      case GET_FRIENDS_FAILURE:
        break;

      // delete friend
      case DELETE_FRIEND_REQUEST:
        draft.isLoading.name = LOADING_DELETE_FRIEND;
        draft.isLoading.id = action.deleteId;
        break;
      case DELETE_FRIEND_SUCCESS: {
        const index = draft.Friends.findIndex((v) => v.Friend.FriendId === action.deleteId);
        draft.Friends.splice(index, 1);
        draft.info.friends--;
        draft.isLoading.name = null;
        draft.isLoading.id = null;
        break;
      }
      case DELETE_FRIEND_FAILURE:
        draft.isLoading.name = null;
        draft.isLoading.id = null;
        break;

      // update user info
      case UPDATE_USER_INFO_REQUEST:
      case UPDATE_USER_INFO_FAILURE:
        break;
      case UPDATE_USER_INFO_SUCCESS:
        draft.info = Object.assign(draft.info, action.data);
        break;

      // get other user info
      case GET_OTHER_USER_INFO_REQUEST:
      case GET_OTHER_USER_INFO_FAILURE:
        break;
      case GET_OTHER_USER_INFO_SUCCESS:
        draft.otherUserInfo = action.data;
        break;

      default:
        break;
    }
  });
};

export default user;
