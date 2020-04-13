import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Row, Col, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { RootState } from '../../reducers';
import UserInfoWrapper from './styled';

const UserInfo = () => {
  const { otherUserInfo } = useSelector((state: RootState) => state.user);

  return (
    <UserInfoWrapper>
      <div>
        <Row>
          <Col span={24}>
            <Statistic title="이름" value={`${otherUserInfo.familyName}${otherUserInfo.firstName}`} />
          </Col>
          <Col span={12}>
            <Statistic title="게시글" value={`${otherUserInfo.Posts}개`} />
          </Col>
          <Col span={12}>
            <Statistic title="친구" value={`${otherUserInfo.Friends}명`} />
          </Col>
        </Row>
      </div>
      <div>
        {otherUserInfo.profilePhoto ? (
          <Avatar size={120} src={`http://localhost:3065/${otherUserInfo.profilePhoto}`} />
        ) : (
          <Avatar size={120} icon={<UserOutlined />} />
        )}
      </div>
    </UserInfoWrapper>
  );
};

export default UserInfo;
