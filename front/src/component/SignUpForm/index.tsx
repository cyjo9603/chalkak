import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

import { Form, DoubleWrapper, DateWrapper, InputWrapper, GenderWrapper, TermWrapper, SubmitWrapper } from './styled';
import Input from '../Input';
import WarningMessage from './WarningMessage';
import Select from '../Select';
import Terms from './Terms';
import {
  getIdWarningMsg,
  getPwWarningMsg,
  getPwReWarningMsg,
  getPhoneWarningMsg,
  getMailWarningMsg,
} from './getMessage';
import { getIdWarningLevel, getPwWarningLevel, getPhoneWarningLevel, getMailWarningLevel } from './getLevel';

const SignUpForm = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordRe, setInputPasswordRe] = useState('');
  const [inputFamilyName, setInputFamilyName] = useState('');
  const [inputFirstName, setInputFirstName] = useState('');
  const [selectGender, setSelectGender] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputMail, setInputMail] = useState('');
  const [termsCheck, setTermsCheck] = useState(false);
  const [idWarnLevel, setIdWarnLevel] = useState(0);
  const [pwWarnLevel, setPwWarnLevel] = useState(0);
  const [pwReWarnLevel, setPwReWarnLevel] = useState(0);
  const [phoneLevel, setPhoneLevel] = useState(0);
  const [mailLevel, setMailLevel] = useState(0);

  const idWarnMessage = getIdWarningMsg(idWarnLevel);
  const passwordWarnMessage = getPwWarningMsg(pwWarnLevel);
  const passwordReWarnMessage = getPwReWarningMsg(pwReWarnLevel);
  const phoneWarnMessage = getPhoneWarningMsg(phoneLevel);
  const mailWarnMessage = getMailWarningMsg(mailLevel);

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const level = getIdWarningLevel(value);
    setInputId(value);
    setIdWarnLevel(level);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const level = getPwWarningLevel(value);
    setInputPassword(value);
    setPwWarnLevel(level);
  }, []);

  const onChangePasswordRe = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const level = (() => {
        if (value.length === 0) {
          return 0;
        }
        if (value === inputPassword) {
          return 3;
        }
        return 1;
      })();
      setInputPasswordRe(value);
      setPwReWarnLevel(level);
    },
    [inputPassword],
  );

  const onChangeFamilyName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFamilyName(e.target.value);
  }, []);

  const onChangeFirstName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFirstName(e.target.value);
  }, []);

  const onChangeGender = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectGender(e.target.value);
  }, []);

  const onChnagePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const level = getPhoneWarningLevel(value);
    setInputPhone(value);
    setPhoneLevel(level);
  }, []);

  const onChnageMail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const level = getMailWarningLevel(value);
    setInputMail(value);
    setMailLevel(level);
  }, []);

  const onTermsCheck = useCallback(() => {
    setTermsCheck(true);
  }, []);

  return (
    <Form>
      <InputWrapper>
        <div>아이디</div>
        <Input value={inputId} onChange={onChangeId} type="text" />
        <WarningMessage level={idWarnLevel} message={idWarnMessage} />
      </InputWrapper>
      <InputWrapper>
        <div>비밀번호</div>
        <Input value={inputPassword} onChange={onChangePassword} type="password" />
        <WarningMessage level={pwWarnLevel} message={passwordWarnMessage} />
      </InputWrapper>
      <InputWrapper>
        <div>비밀번호 재확인</div>
        <Input value={inputPasswordRe} onChange={onChangePasswordRe} type="password" />
        <WarningMessage level={pwReWarnLevel} message={passwordReWarnMessage} />
      </InputWrapper>
      <div>
        <div>이름</div>
        <DoubleWrapper>
          <Input value={inputFamilyName} onChange={onChangeFamilyName} type="text" placeholder="성" />
          <Input value={inputFirstName} onChange={onChangeFirstName} type="text" placeholder="이름" />
        </DoubleWrapper>
      </div>
      <InputWrapper>
        <div>생년월일</div>
        <DateWrapper placeholder="날짜 선택" />
      </InputWrapper>
      <GenderWrapper>
        <div>성별</div>
        <Select value={selectGender} onChange={onChangeGender} option={['남성', '여성']} />
      </GenderWrapper>
      <InputWrapper>
        <div>전화번호</div>
        <Input value={inputPhone} onChange={onChnagePhone} type="text" />
        <WarningMessage level={phoneLevel} message={phoneWarnMessage} />
      </InputWrapper>
      <InputWrapper>
        <div>이메일</div>
        <Input value={inputMail} onChange={onChnageMail} type="text" />
        <WarningMessage level={mailLevel} message={mailWarnMessage} />
      </InputWrapper>
      <TermWrapper>
        <Terms termsCheck={termsCheck} onTermsCheck={onTermsCheck} />
      </TermWrapper>
      <SubmitWrapper>
        <Button>초기화</Button>
        <Button type="primary">가입</Button>
      </SubmitWrapper>
    </Form>
  );
};

export default SignUpForm;
