import React, { useCallback } from 'react';
import { Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { NotifyWrapper, DoubleButtonWrapper } from './styled';
import transNotifyType from '../../util/transNotifyType';
import { UserNotify } from '../../reducers/user';
import { friendResponseRequest } from '../../reducers/user/friendResponse';

interface Props {
  notify: UserNotify;
}

const SideNotification = ({ notify }: Props) => {
  const dispatch = useDispatch();
  const notifyContents = transNotifyType(notify);

  const onClickAccept = useCallback(() => {
    dispatch(
      friendResponseRequest({
        notifyId: notify.id,
        response: true,
      }),
    );
  }, []);

  const onClickDecline = useCallback(() => {
    dispatch(
      friendResponseRequest({
        notifyId: notify.id,
        response: false,
      }),
    );
  }, []);

  return (
    <NotifyWrapper
      title={
        <>
          <BellOutlined /> {notifyContents.title}
        </>
      }
    >
      {notifyContents.contents}
      <DoubleButtonWrapper>
        <Button onClick={onClickDecline}>거절</Button>
        <Button type="primary" onClick={onClickAccept}>
          수락
        </Button>
      </DoubleButtonWrapper>
    </NotifyWrapper>
  );
};

export default SideNotification;
