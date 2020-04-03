import React, { FC } from 'react';

import Header from './Header';
import { Layout, Section, MainContents, Notify } from './styled';
import Footer from './Footer';
import SideNotification from '../SideNotification';

import dummy from '../../dummy';

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Layout>
      <Header />
      <Section>
        <div>
          <MainContents> {children}</MainContents>
          {dummy.user.userInfo && (
            <Notify>
              {dummy.user.notifyList.map((v, i) => (
                <SideNotification key={`notify-${v.type}-${i}`} notify={v} />
              ))}
            </Notify>
          )}
        </div>
      </Section>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
