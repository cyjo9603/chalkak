import React, { memo } from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import { HeaderMenu, SignLink } from './styled';

const UnSignInMenu = memo(() => (
  <HeaderMenu mode="horizontal" theme="dark" overflowedIndicator={<MenuOutlined />}>
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
));

export default UnSignInMenu;
