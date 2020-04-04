import React from 'react';
import { Avatar, Row, Col, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FormWrapper from './styled';

import dummy from '../../dummy';

const ProfileForm = () => {
  const { userInfo } = dummy.user;

  return (
    <FormWrapper>
      <Avatar icon={<UserOutlined />} size={200} />
      <Row gutter={16}>
        <Col span={24}>
          <Statistic title="이름" value={`${userInfo.familyName} ${userInfo.firstName}`} />
        </Col>
        <Col span={12}>
          <Statistic title="생일" value={`3월 30일`} />
        </Col>
        <Col span={12}>
          <Statistic title="연락처" value={`${userInfo.phone}`} />
        </Col>
        <Col span={12}>
          <Statistic title="이메일" value={`${userInfo.mail}`} />
        </Col>
        <Col span={12}>
          <Statistic title="친구" value={`${userInfo.friends.total}명`} />
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default ProfileForm;
