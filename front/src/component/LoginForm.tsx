import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const LoginForm = () => {
  return (
    <FormWrapper>
      <Input placeholder="아이디" prefix={<UserOutlined />} />
      <Input.Password placeholder="비밀번호" />
      <Button ghost>로그인</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;

  & > span:nth-child(-n + 2) {
    width: 150px;
    margin-right: 10px;
  }
`;

export default LoginForm;
