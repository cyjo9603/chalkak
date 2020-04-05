import React, { useCallback } from 'react';

import FriendsList from '../component/FriendsList';
import MoreButton from '../component/MoreButton';

import dummy from '../dummy';

const Friends = () => {
  const { friends } = dummy.user.userInfo;

  const onClickMoreButton = useCallback(() => null, []);
  return (
    <>
      <FriendsList />
      {friends.total === friends.lists.length ? null : <MoreButton onClick={onClickMoreButton} />}
    </>
  );
};

export default Friends;
