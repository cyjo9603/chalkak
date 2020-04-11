import React from 'react';
import Link from 'next/link';

import { HeaderWrapper, LeftWrapper, Search } from './styled';
import UnSignInMenu from './UnSignInMenu';
import SignInMenu from './SignInMenu';
import { UserInfo } from '../../../reducers/user';

interface Props {
  userInfo: UserInfo;
}

const Header = ({ userInfo }: Props) => {
  return (
    <HeaderWrapper>
      <div>
        <LeftWrapper>
          <Link href="/">
            <a>
              <img src="/logo_main.svg" alt="logo" />
            </a>
          </Link>
          <Search />
        </LeftWrapper>
        {userInfo ? <SignInMenu info={userInfo} /> : <UnSignInMenu />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
