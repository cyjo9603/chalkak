import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { RootState } from '../reducers';
import PasswordCheck from '../component/PasswordCheck';
import ChangePasswordForm from '../component/ChangePasswordForm';

const ChangePassword = () => {
  const id = useSelector((state: RootState) => state.user.info && state.user.info.id);
  const [userCheck, setUserCheck] = useState(false);

  useEffect(() => {
    if (!id) {
      Router.push('/');
    }
  }, [id]);

  const onCheck = useCallback(() => {
    setUserCheck(true);
  }, []);

  return <>{userCheck ? <ChangePasswordForm /> : <PasswordCheck onCheck={onCheck} />}</>;
};

export default ChangePassword;
