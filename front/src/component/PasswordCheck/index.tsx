import React, { useState, useCallback, memo } from 'react';
import { Input, Button } from 'antd';
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

  const onSubmitPassword = useCallback(async () => {
    const getResult = await axios.post('/user/password', { password }, { withCredentials: true });
    if (getResult.data.result) {
      onCheck();
    }
  }, [password]);

  return (
    <CheckWrapper>
      <div>
        <div>비밀번호를 입력해 주세요 :)</div>
        <Input type="password" value={password} onChange={onPassword} />
        <Button type="primary" onClick={onSubmitPassword}>
          입력
        </Button>
      </div>
    </CheckWrapper>
  );
});

export default PasswordCheck;
