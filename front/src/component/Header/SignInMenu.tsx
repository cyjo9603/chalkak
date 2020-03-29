import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Avatar, Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { HeaderMenu, UserAvatar } from './HeaderStyled';

import dummy from '../../dummy';

const SignInMenu = () => {
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
              <Avatar size={30}>{dummy.user.userInfo.userFirstName}</Avatar>
              <div>{`${dummy.user.userInfo.userFamilyName}${dummy.user.userInfo.userFirstName}`}</div>
            </a>
          </Link>
        </UserAvatar>
        <Menu.Item onClick={onOpen}>
          <MenuOutlined />
        </Menu.Item>
      </HeaderMenu>
      <Drawer title="Menu" placement="right" closable={false} onClose={onClose} visible={drawerOpen}>
        <p>
          <Link href="/mypage">
            <a>마이페이지</a>
          </Link>
        </p>
        <p>
          <Link href="/friends">
            <a>친구 목록</a>
          </Link>
        </p>
        <p>
          <Link href="/settings">
            <a>설정</a>
          </Link>
        </p>
      </Drawer>
    </>
  );
};

export default SignInMenu;
