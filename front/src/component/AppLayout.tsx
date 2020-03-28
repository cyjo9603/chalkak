import React, { FC } from 'react';
import styled from 'styled-components';

import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
    </>
  );
};

const Contents = styled.section`
  padding-top: 50px;
  width: 1200px;
`;

export default AppLayout;
