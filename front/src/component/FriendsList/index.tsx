import React from 'react';
import { List } from 'antd';

import { ListWrapper } from './styled';
import FriendCard from './FriendCard';

import dummy, { User } from '../../dummy';

const FriendsList = () => {
  const { friends } = dummy.user.userInfo;

  return (
    <ListWrapper>
      <List
        header="친구 목록"
        dataSource={friends.lists || []}
        renderItem={(item: User) => <FriendCard data={item} />}
      />
    </ListWrapper>
  );
};

export default FriendsList;
