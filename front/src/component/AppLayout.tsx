import React, { FC } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Wrapper from './Wrapper';

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

const Contents = styled(Wrapper)`
  padding-top: 50px;
`;

export default AppLayout;
