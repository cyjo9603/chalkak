import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext } from 'next';
import Router from 'next/router';

import FriendsList from '../container/FriendsList';
import MoreButton from '../component/MoreButton';
import { RootState } from '../reducers';
import { getFriendsRequest } from '../reducers/user/getFriends';

const Friends = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const friends = useSelector((state: RootState) => state.user.Friends);

  useEffect(() => {
    if (!info) {
      Router.push('/');
    }
  }, [info]);

  const onClickMoreButton = useCallback(() => {
    dispatch(getFriendsRequest(friends[friends.length - 1].id));
  }, [friends]);

  return (
    <>
      {friends && <FriendsList list={friends} />}
      {info && friends && info.friends !== friends.length ? <MoreButton onClick={onClickMoreButton} /> : null}
    </>
  );
};

Friends.getInitialProps = async (context: NextPageContext) => {
  context.store.dispatch(getFriendsRequest());
};

export default Friends;
