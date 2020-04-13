import React from 'react';
import { NextPageContext } from 'next';

import UserInfo from '../component/UserInfo';
import FriendRequestForm from '../component/FriendRequestForm';
import { GetOtherUserInfoRequest } from '../reducers/user/getOtherUserInfo';

interface Props {
  id: number;
}

const User = ({ id }: Props) => {
  return (
    <>
      <FriendRequestForm />
      <UserInfo />
    </>
  );
};

User.getInitialProps = async (context: NextPageContext) => {
  if (context.query.id) {
    const id = parseInt(context.query.id as string, 10);
    context.store.dispatch(GetOtherUserInfoRequest(id));
    return id;
  }
};

export default User;
