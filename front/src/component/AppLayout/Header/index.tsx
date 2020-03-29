import React from 'react';
import Link from 'next/link';

import { HeaderWrapper, LeftWrapper, Search } from './styled';
import UnSignInMenu from './UnSignInMenu';
import SignInMenu from './SignInMenu';

import dummy from '../../../dummy';

const Header = () => {
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
        {dummy.user.userInfo ? <SignInMenu /> : <UnSignInMenu />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
