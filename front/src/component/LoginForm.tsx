import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const LoginForm = () => {
  return (
    <FormWrapper>
      <Input placeholder="아이디" prefix={<UserOutlined />} />
      <Input.Password placeholder="비밀번호" />
      <Link href="/signin">
        <a>
          <Button ghost>로그인</Button>
        </a>
      </Link>
      <Link href="/signup">
        <a>
          <Button ghost>회원가입</Button>
        </a>
      </Link>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;

  & > span {
    width: 150px;
    margin-right: 10px;
  }

  & button {
    width: 100px;
    margin-right: 10px;
  }
`;

export default LoginForm;
