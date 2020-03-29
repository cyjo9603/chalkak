import React from 'react';
import Link from 'next/link';

import { HeaderWrapper, LeftWrapper, Search } from './HeaderStyled';
import UnSignInMenu from './UnSignInMenu';

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
        <UnSignInMenu />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
