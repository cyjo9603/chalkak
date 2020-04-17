import React, { useCallback, memo } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { message } from 'antd';

import { HeaderWrapper, LeftWrapper, Search } from './styled';
import UnSignInMenu from './UnSignInMenu';
import SignInMenu from './SignInMenu';
import { UserInfo } from '../../../reducers/user';

interface Props {
  userInfo: UserInfo;
}

const Header = memo(({ userInfo }: Props) => {
  const onSearchText = useCallback((value) => {
    if (!value || !value.trim()) {
      return message.error('검색어를 입력해주세요!');
    }
    Router.push({ pathname: '/hashtag', query: { tag: value } }, `/hashtag/${value}`);
  }, []);

  return (
    <HeaderWrapper>
      <div>
        <LeftWrapper>
          <Link href="/">
            <a>
              <img src="/logo_main.svg" alt="logo" />
            </a>
          </Link>
          <Search onSearch={onSearchText} />
        </LeftWrapper>
        {userInfo ? <SignInMenu info={userInfo} /> : <UnSignInMenu />}
      </div>
    </HeaderWrapper>
  );
});

export default Header;
