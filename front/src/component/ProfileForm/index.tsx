import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Row, Col, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FormWrapper from './styled';
import { RootState } from '../../reducers';

const ProfileForm = () => {
  const { info } = useSelector((state: RootState) => state.user);

  return (
    <FormWrapper>
      <Avatar icon={<UserOutlined />} size={200} />
      <Row gutter={16}>
        <Col span={24}>
          <Statistic title="이름" value={`${info.familyName} ${info.firstName}`} />
        </Col>
        <Col span={12}>
          <Statistic title="생일" value={`${info.birth}`} />
        </Col>
        <Col span={12}>
          <Statistic title="연락처" value={`${info.phone}`} />
        </Col>
        <Col span={12}>
          <Statistic title="이메일" value={`${info.mail}`} />
        </Col>
        <Col span={12}>
          <Statistic title="친구" value={`${info.friends}명`} />
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default ProfileForm;
