import React, { FC } from 'react';

import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
