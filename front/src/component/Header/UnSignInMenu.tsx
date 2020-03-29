import React from 'react';
import Link from 'next/link';

import { HeaderMenu, SignLink } from './HeaderStyled';

const UnSignInMenu = () => (
  <HeaderMenu mode="horizontal" theme="dark">
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
);

export default UnSignInMenu;
