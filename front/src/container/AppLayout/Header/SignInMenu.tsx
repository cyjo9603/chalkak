import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Avatar, Menu, Drawer, Button } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

import { HeaderMenu, UserAvatar, LogoutWrapper } from './styled';
import { RootState } from '../../../reducers';
import { UserInfo } from '../../../reducers/user';
import { LOADING_LOGOUT } from '../../../reducers/user/values';
import { logOutRequest } from '../../../reducers/user/logout';

interface Props {
  info: UserInfo;
}

const SignInMenu = ({ info }: Props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onLogout = useCallback(() => {
    dispatch(logOutRequest());
  }, []);

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
              {info.profilePhoto ? (
                <Avatar size={30} src={`http://localhost:3065/${info.profilePhoto}`} />
              ) : (
                <Avatar size={30} icon={<UserOutlined />} />
              )}
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
            <Button onClick={onLogout} loading={isLoading.name === LOADING_LOGOUT}>
              로그아웃
            </Button>
          </LogoutWrapper>
        }
      >
        <p>
          <Link href="/mypage">
            <a onClick={onClose}>마이페이지</a>
          </Link>
        </p>
        <p>
          <Link href="/changePassword">
            <a onClick={onClose}>비밀번호 변경</a>
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
