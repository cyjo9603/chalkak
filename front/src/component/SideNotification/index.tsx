import React from 'react';

import { BellOutlined, CloseOutlined } from '@ant-design/icons';
import NotifyWrapper from './styled';
import transNotifyType from '../../util/transNotifyType';

import { NotifyType } from '../../dummy';

interface Props {
  notify: NotifyType;
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
