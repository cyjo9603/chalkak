import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import { Layout, Section, MainContents, Notify } from './styled';
import Footer from './Footer';
import SideNotification from '../SideNotification';
import { RootState } from '../../reducers';

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }: Props) => {
  const { info } = useSelector((state: RootState) => state.user);
  const { notify } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <Header userInfo={info} />
      <Section>
        <div>
          <MainContents> {children}</MainContents>
          {info && (
            <Notify>
              {notify.map((v, i) => (
                <SideNotification key={`notify-${v.id}`} notify={v} />
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
