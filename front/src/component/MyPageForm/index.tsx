import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

import { MyPageWrapper } from './styled';
import NameBox from './NameBox';
import BoxWrapper from './BoxWrapper';
import { RootState } from '../../reducers';
import { updateUserInfoRequest, UpdateInfo } from '../../reducers/user/updateUserInfo';

const MyPageForm = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [familyName, setFamilyName] = useState(info.familyName);
  const [firstName, setFirstName] = useState(info.firstName);
  const [birth, setBirth] = useState(info.birth);
  const [phone, setPhone] = useState(info.phone);
  const [mail, setMail] = useState(info.mail);
  const [profilePhoto, setProfilePhoto] = useState<null | string>(info.profilePhoto);
  const imageInput = useRef<HTMLInputElement>();

  const changeEditingMode = useCallback(() => {
    if (!isEditing) {
      return setIsEditing(true);
    }
    const updateInfo: UpdateInfo = {};
    if (familyName !== info.familyName) {
      updateInfo.familyName = familyName;
    }
    if (firstName !== info.firstName) {
      updateInfo.firstName = firstName;
    }
    if (birth !== info.birth) {
      updateInfo.birth = birth;
    }
    if (phone !== info.phone) {
      updateInfo.phone = phone;
    }
    if (mail !== info.mail) {
      updateInfo.mail = mail;
    }
    if (profilePhoto !== info.profilePhoto) {
      updateInfo.profilePhoto = profilePhoto;
    }
    dispatch(updateUserInfoRequest(updateInfo));
    setIsEditing(false);
  }, [isEditing, familyName, firstName, birth, phone, mail, profilePhoto]);

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

  const onChangeProfilePhoto = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('test');
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    const result = await axios.post('/user/image', imageFormData, { withCredentials: true });
    setProfilePhoto(result.data);
  }, []);

  const onClickImageUpload = useCallback(() => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }, [imageInput.current]);

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
            <input type="file" multiple hidden ref={imageInput} onChange={onChangeProfilePhoto} />
            {profilePhoto ? (
              <Avatar src={`http://localhost:3065/${profilePhoto}`} size={130} />
            ) : (
              <Avatar icon={<UserOutlined />} size={130} />
            )}

            {isEditing && (
              <Button type="dashed" onClick={onClickImageUpload}>
                편집
              </Button>
            )}
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
