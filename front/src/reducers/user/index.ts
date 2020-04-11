import produce from 'immer';

import { notifyType } from './values';

export interface UserInfo {
  id: number;
  familyName: string;
  firstName: string;
  userId: string;
  birth: string;
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
}

const initialState: UserInitialState = {
  info: null,
  notify: null,
  Friends: null,
  otherUserInfo: null,
};

const user = (state: UserInitialState = initialState, action: any) => {
  return produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      default:
        break;
    }
  });
};

export default user;
