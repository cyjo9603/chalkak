import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { MyPageWrapper } from './styled';
import NameBox from './NameBox';
import BoxWrapper from './BoxWrapper';
import { RootState } from '../../reducers';

const MyPageForm = () => {
  const { info } = useSelector((state: RootState) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [familyName, setFamilyName] = useState(info.familyName);
  const [firstName, setFirstName] = useState(info.firstName);
  const [birth, setBirth] = useState(info.birth);
  const [phone, setPhone] = useState(info.phone);
  const [mail, setMail] = useState(info.mail);

  const changeEditingMode = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const onChangeFirstName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }, []);

  const onChangeFamilyName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFamilyName(e.target.value);
  }, []);

  const onChangeBirth = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  }, []);

  const onChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }, []);

  const onChangeMail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  }, []);

  return (
    <MyPageWrapper>
      <header>
        <div>마이페이지</div>
        <Button type={isEditing ? 'primary' : 'ghost'} onClick={changeEditingMode}>
          {isEditing ? '저장' : '편집'}
        </Button>
      </header>
      <hr />
      <section>
        <div>
          <div>
            <NameBox
              isEditing={isEditing}
              firstNameStore={info.firstName}
              firstNameValue={firstName}
              onChangeFirstName={onChangeFirstName}
              familyNameStore={info.familyName}
              familyNameValue={familyName}
              onChangeFamilyName={onChangeFamilyName}
            />
            <BoxWrapper
              isEditing={isEditing}
              title="생년월일"
              store={info.birth}
              value={birth}
              onChange={onChangeBirth}
              size={100}
            />
          </div>
          <div>
            <Avatar icon={<UserOutlined />} size={130} />
            <Button type="dashed">편집</Button>
          </div>
        </div>
        <div>
          <BoxWrapper
            isEditing={isEditing}
            title="연락처"
            store={info.phone}
            value={phone}
            onChange={onChangePhone}
            size={50}
          />
          <BoxWrapper
            isEditing={isEditing}
            title="이메일"
            store={info.mail}
            value={mail}
            onChange={onChangeMail}
            size={50}
          />
        </div>
      </section>
    </MyPageWrapper>
  );
};

export default MyPageForm;
