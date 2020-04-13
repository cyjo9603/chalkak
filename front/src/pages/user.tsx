import React from 'react';
import { useSelector } from 'react-redux';
import { NextPageContext } from 'next';

import UserInfo from '../component/UserInfo';
import FriendRequestForm from '../component/FriendRequestForm';
import { GetOtherUserInfoRequest } from '../reducers/user/getOtherUserInfo';
import { RootState } from '../reducers';

const User = () => {
  const { info } = useSelector((state: RootState) => state.user);
  const { id } = useSelector((state: RootState) => state.user.otherUserInfo);

  return (
    <>
      {info && info.id !== id && <FriendRequestForm id={id} />}
      <UserInfo />
    </>
  );
};

User.getInitialProps = async (context: NextPageContext) => {
  if (context.query.id) {
    const id = parseInt(context.query.id as string, 10);
    context.store.dispatch(GetOtherUserInfoRequest(id));
  }
};

export default User;
