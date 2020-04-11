import React from 'react';

import { BellOutlined, CloseOutlined } from '@ant-design/icons';
import NotifyWrapper from './styled';
import transNotifyType from '../../util/transNotifyType';
import { UserNotify } from '../../reducers/user';

interface Props {
  notify: UserNotify;
}

const SideNotification = ({ notify }: Props) => {
  const notifyContents = transNotifyType(notify);

  return (
    <NotifyWrapper
      title={
        <>
          <BellOutlined /> {notifyContents.title}
        </>
      }
      extra={<CloseOutlined />}
    >
      {notifyContents.contents}
    </NotifyWrapper>
  );
};

export default SideNotification;
