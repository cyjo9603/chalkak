import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Input } from 'antd';

import Wrapper from './Wrapper';
import LoginForm from './LoginForm';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <div>
          <Link href="/">
            <a>
              <img src="/logo_main.svg" alt="logo" />
            </a>
          </Link>
          <Search />
        </div>
        <LoginForm />
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: #272343;
  height: 50px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > div:first-child {
    display: flex;
    width: 500px;
  }

  & img {
    margin-right: 10px;
    height: 32px;
  }
`;

const Search = styled(Input.Search)`
  height: 30px;
`;

export default Header;
