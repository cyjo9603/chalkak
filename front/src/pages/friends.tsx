import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import FriendsList from '../component/FriendsList';
import MoreButton from '../component/MoreButton';
import { RootState } from '../reducers';

const Friends = () => {
  const { info } = useSelector((state: RootState) => state.user);
  const friends = useSelector((state: RootState) => state.user.Friends);

  const onClickMoreButton = useCallback(() => null, []);

  return (
    <>
      <FriendsList list={friends} />
      {info.friends === friends.length ? null : <MoreButton onClick={onClickMoreButton} />}
    </>
  );
};

export default Friends;
