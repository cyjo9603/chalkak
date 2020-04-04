import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';

import CheckWrapper from './styled';

interface Props {
  onCheck: () => void;
}

const PasswordCheck = ({ onCheck }: Props) => {
  const [password, setPassword] = useState('');

  const onPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitPassword = useCallback(() => {
    if (true) {
      onCheck();
    }
  }, []);

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
};

export default PasswordCheck;
