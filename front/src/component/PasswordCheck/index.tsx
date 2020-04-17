import React, { useState, useCallback, memo } from 'react';
import { Input, Button, message } from 'antd';
import axios from 'axios';

import CheckWrapper from './styled';

interface Props {
  onCheck: () => void;
}

const PasswordCheck = memo(({ onCheck }: Props) => {
  const [password, setPassword] = useState('');

  const onPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitPassword = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const getResult = await axios.post('/user/password', { password }, { withCredentials: true });
        if (getResult.data.result) {
          onCheck();
        }
      } catch (e) {
        setPassword('');
        message.error('비밀번호가 틀립니다!');
      }
    },
    [password],
  );

  return (
    <CheckWrapper>
      <form onSubmit={onSubmitPassword}>
        <div>비밀번호를 입력해 주세요 :)</div>
        <Input type="password" value={password} onChange={onPassword} />
        <Button type="primary" htmlType="submit">
          입력
        </Button>
      </form>
    </CheckWrapper>
  );
});

export default PasswordCheck;
