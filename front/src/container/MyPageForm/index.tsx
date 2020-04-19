import React, { useState, useCallback, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

import { MyPageWrapper } from './styled';
import NameBox from './NameBox';
import BoxWrapper from './BoxWrapper';
import { RootState } from '../../reducers';
import { updateUserInfoRequest, UpdateInfo } from '../../reducers/user/updateUserInfo';
import SERVER_URL from '../../util/config';

const MyPageForm = memo(() => {
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
    if (
      !familyName ||
      !familyName.trim() ||
      !firstName ||
      !firstName.trim() ||
      !birth ||
      !birth.trim() ||
      !phone ||
      !phone.trim() ||
      !mail ||
      !mail.trim()
    ) {
      return message.error('빈값은 입력할 수 없습니다!');
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
              <Avatar src={`${SERVER_URL}/${profilePhoto}`} size={130} />
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
});

export default MyPageForm;
