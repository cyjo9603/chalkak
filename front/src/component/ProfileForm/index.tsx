import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Row, Col, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FormWrapper from './styled';
import { RootState } from '../../reducers';

const ProfileForm = memo(() => {
  const { profilePhoto } = useSelector((state: RootState) => state.user.info);
  const { familyName } = useSelector((state: RootState) => state.user.info);
  const { firstName } = useSelector((state: RootState) => state.user.info);
  const { birth } = useSelector((state: RootState) => state.user.info);
  const { phone } = useSelector((state: RootState) => state.user.info);
  const { mail } = useSelector((state: RootState) => state.user.info);
  const { friends } = useSelector((state: RootState) => state.user.info);

  return (
    <FormWrapper>
      {profilePhoto ? <Avatar src={`${profilePhoto}`} size={200} /> : <Avatar icon={<UserOutlined />} size={200} />}

      <Row gutter={16}>
        <Col span={24}>
          <Statistic title="이름" value={`${familyName} ${firstName}`} />
        </Col>
        <Col span={12}>
          <Statistic title="생일" value={`${birth}`} />
        </Col>
        <Col span={12}>
          <Statistic title="연락처" value={`${phone} `} />
        </Col>
        <Col span={12}>
          <Statistic title="이메일" value={`${mail}`} />
        </Col>
        <Col span={12}>
          <Statistic title="친구" value={`${friends}명`} />
        </Col>
      </Row>
    </FormWrapper>
  );
});

export default ProfileForm;
