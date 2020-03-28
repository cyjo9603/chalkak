import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

import { HeaderWrapper, HeaderMenu, LeftWrapper, Logo, Search, SignLink } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMenu mode="horizontal">
        <LeftWrapper>
          <Logo key="index">
            <Link href="/">
              <a>
                <img src="/logo_main.svg" alt="logo" />
              </a>
            </Link>
          </Logo>
          <Menu.Item key="search">
            <Search />
          </Menu.Item>
        </LeftWrapper>
        <SignLink key="signin">
          <Link href="/signin">
            <a>
              <span>로그인</span>
            </a>
          </Link>
        </SignLink>
        <SignLink key="signup">
          <Link href="/signup">
            <a>
              <span>회원가입</span>
            </a>
          </Link>
        </SignLink>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
