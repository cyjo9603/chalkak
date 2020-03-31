import React, { FC } from 'react';
import { Row, Col } from 'antd';

import Header from './Header';
import { Layout, Section } from './styled';
import Footer from './Footer';

import dummy from '../../dummy';

const MAX_SIZE = 24;
const MAINSECTION_SIZE = 18;
const MAINSIDE_SIZE = 6;

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }: Props) => {
  const mainSectionSize = dummy.user.userInfo ? MAINSECTION_SIZE : MAX_SIZE;

  return (
    <Layout>
      <Header />
      <Section>
        <Row gutter={8}>
          <Col xs={MAX_SIZE} md={mainSectionSize}>
            {children}
          </Col>
          {mainSectionSize === MAINSECTION_SIZE && (
            <Col xs={MAX_SIZE} md={MAINSIDE_SIZE}>
              {'notify message'}
            </Col>
          )}
        </Row>
      </Section>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
