import React, { useState, useCallback } from 'react';

import PasswordCheck from '../component/PasswordCheck';
import ChangePasswordForm from '../component/ChangePasswordForm';

const ChangePassword = () => {
  const [userCheck, setUserCheck] = useState(false);

  const onCheck = useCallback(() => {
    setUserCheck(true);
  }, []);

  return <>{userCheck ? <ChangePasswordForm /> : <PasswordCheck onCheck={onCheck} />}</>;
};

export default ChangePassword;
