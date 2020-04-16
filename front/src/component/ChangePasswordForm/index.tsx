import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import Router from 'next/router';

import ChangeFormWrapper from './styled';
import { InputWrapper } from '../SignUpForm/styled';
import Input from '../Input';
import WarningMessage from '../SignUpForm/WarningMessage';
import { getPwWarningLevel } from '../SignUpForm/getLevel';
import { getPwWarningMsg, getPwReWarningMsg } from '../SignUpForm/getMessage';

const ChangePasswordForm = () => {
  const [originalPassword, setOriginalPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRe, setNewPasswordRe] = useState('');
  const [pwWarnLevel, setPwWarnLevel] = useState(0);
  const [pwReWarnLevel, setPwReWarnLevel] = useState(0);

  const passwordWarnMessage = getPwWarningMsg(pwWarnLevel);
  const passwordReWarnMessage = getPwReWarningMsg(pwReWarnLevel);

  const onSubmitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (pwWarnLevel === 3 && pwReWarnLevel === 3) {
        const result = await axios.patch(
          '/user/password',
          {
            originalPassword,
            newPassword,
          },
          { withCredentials: true },
        );
        if (result) {
          Router.push('/');
        }
      }
    },
    [pwWarnLevel, pwReWarnLevel, originalPassword, newPassword],
  );

  const onChangeOriginPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalPassword(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const level = getPwWarningLevel(value);
    setNewPassword(value);
    setPwWarnLevel(level);
  }, []);

  const onChangePasswordRe = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const level = (() => {
        if (value.length === 0) {
          return 0;
        }
        if (value === newPassword) {
          return 3;
        }
        return 1;
      })();
      setNewPasswordRe(value);
      setPwReWarnLevel(level);
    },
    [newPassword],
  );

  return (
    <ChangeFormWrapper>
      <form onSubmit={onSubmitForm}>
        <InputWrapper>
          <div>현재 비밀번호</div>
          <Input value={originalPassword} onChange={onChangeOriginPassword} type="password" />
        </InputWrapper>

        <InputWrapper>
          <div>변경할 비밀번호</div>
          <Input value={newPassword} onChange={onChangePassword} type="password" />
          <WarningMessage level={pwWarnLevel} message={passwordWarnMessage} />
        </InputWrapper>

        <InputWrapper>
          <div>변경할 비밀번호 재확인</div>
          <Input value={newPasswordRe} onChange={onChangePasswordRe} type="password" />
          <WarningMessage level={pwReWarnLevel} message={passwordReWarnMessage} />
        </InputWrapper>

        <Button type="primary" htmlType="submit">
          비밀번호 변경
        </Button>
      </form>
    </ChangeFormWrapper>
  );
};

export default ChangePasswordForm;
