import React, { memo } from 'react';
import { List } from 'antd';

import { ListWrapper } from './styled';
import FriendCard from './FriendCard';
import { UserFriends } from '../../reducers/user';

interface Props {
  list: UserFriends[];
}

const FriendsList = memo(({ list }: Props) => (
  <ListWrapper>
    <List header="친구 목록" dataSource={list || []} renderItem={(item: UserFriends) => <FriendCard data={item} />} />
  </ListWrapper>
));

export default FriendsList;
