import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

import Form from './styled';
import Input from '../Input';

const SignInForm = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  }, []);

  return (
    <Form>
      <Input placeholder="아이디" value={inputId} onChange={onChangeId} type="text" />
      <Input placeholder="비밀번호" value={inputPassword} onChange={onChangePassword} type="password" />
      <Button type="primary">로그인</Button>
      <div>
        <Link href="/find/id">
          <a>아이디 찾기</a>
        </Link>
        {'  '}
        <Link href="/find/id">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;
