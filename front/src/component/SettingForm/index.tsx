import React from 'react';
import { Switch } from 'antd';

import { SettingWrapper, TitleBox, SettingContent } from './styled';

const SettingForm = () => {
  return (
    <SettingWrapper>
      <div>설정</div>
      <div>
        <TitleBox>계정</TitleBox>
        <SettingContent>
          자동 로그인 <Switch size="small" />
        </SettingContent>
      </div>
      <div>
        <TitleBox>테마</TitleBox>
        <SettingContent>
          다크 모드 <Switch size="small" />
        </SettingContent>
      </div>
    </SettingWrapper>
  );
};

export default SettingForm;
