import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { FriendCardWrapper } from './styled';
import { RootState } from '../../reducers';
import { UserFriends } from '../../reducers/user';
import { LOADING_DELETE_FRIEND } from '../../reducers/user/values';
import { deleteFriendRequest } from '../../reducers/user/deleteFriend';

interface Props {
  data: UserFriends;
}

const FriendCard = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);

  const onDeleteFriend = useCallback(
    (id: number) => () => {
      dispatch(deleteFriendRequest(id));
    },
    [],
  );

  return (
    <FriendCardWrapper>
      <Link href={`/user/${data.id}`}>
        <a>
          {data.profilePhoto ? (
            <Avatar size={60} src={`http://localhost:3065/${data.profilePhoto}`} />
          ) : (
            <Avatar size={60} icon={<UserOutlined />} />
          )}
        </a>
      </Link>
      <div>{`${data.familyName}${data.firstName}`}</div>
      <Button
        onClick={onDeleteFriend(data.Friend.FriendId)}
        loading={isLoading.name === LOADING_DELETE_FRIEND && isLoading.id === data.Friend.FriendId}
      >
        친구 끊기
      </Button>
    </FriendCardWrapper>
  );
};

export default FriendCard;
