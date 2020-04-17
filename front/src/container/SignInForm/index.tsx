import React, { useState, useCallback, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

import Form from './styled';
import Input from '../../component/Input';
import { RootState } from '../../reducers';
import { signInRequest } from '../../reducers/user/signin';
import { LOADING_SIGNIN_SUBMIT } from '../../reducers/user/values';

const SignInForm = memo(() => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);
  const { info } = useSelector((state: RootState) => state.user);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const onDisabled = useMemo(() => !(userId && userId.trim() && password && password.trim()), [userId, password]);

  useEffect(() => {
    if (info) {
      Router.push('/');
    }
  }, [info]);

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(signInRequest({ userId, password }));
    },
    [userId, password],
  );

  const onChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <Input placeholder="아이디" value={userId} onChange={onChangeUserId} type="text" />
      <Input placeholder="비밀번호" value={password} onChange={onChangePassword} type="password" />
      <Button type="primary" htmlType="submit" loading={isLoading.name === LOADING_SIGNIN_SUBMIT} disabled={onDisabled}>
        로그인
      </Button>
      <div>
        <Link href="/find/userId">
          <a>아이디 찾기</a>
        </Link>
        {'  '}
        <Link href="/find/userPassword">
          <a>비밀번호 찾기</a>
        </Link>
      </div>
    </Form>
  );
});

export default SignInForm;
