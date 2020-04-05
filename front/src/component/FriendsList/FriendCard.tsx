import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { FriendCardWrapper } from './styled';

import { User } from '../../dummy';

interface Props {
  data: User;
}

const FriendCard = ({ data }: Props) => {
  return (
    <FriendCardWrapper>
      <Avatar size={60} icon={<UserOutlined />} />
      <div>{`${data.familyName}${data.firstName}`}</div>
      <Button>친구 끊기</Button>
    </FriendCardWrapper>
  );
};

export default FriendCard;
