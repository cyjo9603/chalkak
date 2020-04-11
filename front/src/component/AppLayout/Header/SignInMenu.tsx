import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Avatar, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { HeaderMenu, UserAvatar, LogoutWrapper } from './styled';
import { UserInfo } from '../../../reducers/user';

interface Props {
  info: UserInfo;
}

const SignInMenu = ({ info }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onOpen = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <HeaderMenu mode="horizontal" theme="dark">
        <UserAvatar key="Avatar">
          <Link href="/profile">
            <a>
              <Avatar size={30}>{info.firstName}</Avatar>
              <div>{`${info.familyName}${info.firstName}`}</div>
            </a>
          </Link>
        </UserAvatar>
        <Menu.Item onClick={onOpen}>
          <MenuOutlined />
        </Menu.Item>
      </HeaderMenu>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerOpen}
        footer={
          <LogoutWrapper>
            <Button>로그아웃</Button>
          </LogoutWrapper>
        }
      >
        <p>
          <Link href="/mypage">
            <a onClick={onClose}>마이페이지</a>
          </Link>
        </p>
        <p>
          <Link href="/friends">
            <a onClick={onClose}>친구 목록</a>
          </Link>
        </p>
        <p>
          <Link href="/settings">
            <a onClick={onClose}>설정</a>
          </Link>
        </p>
      </Drawer>
    </>
  );
};

export default SignInMenu;
