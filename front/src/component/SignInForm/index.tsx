import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

import { Form, InputWrapper } from './styled';

const SignInForm = () => {
  const [isFocusId, setIsFocusId] = useState(false);
  const [isFocusPW, setIsFocusPW] = useState(false);

  const focusId = useCallback(() => {
    setIsFocusId(true);
  }, []);
  const blurId = useCallback(() => {
    setIsFocusId(false);
  }, []);

  const focusPW = useCallback(() => {
    setIsFocusPW(true);
  }, []);
  const blurPW = useCallback(() => {
    setIsFocusPW(false);
  }, []);

  return (
    <Form>
      <InputWrapper focus={isFocusId}>
        <input placeholder="아이디" onFocus={focusId} onBlur={blurId}></input>
      </InputWrapper>
      <InputWrapper focus={isFocusPW}>
        <input placeholder="비밀번호" onFocus={focusPW} onBlur={blurPW}></input>
      </InputWrapper>
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
