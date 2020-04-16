import React, { useState, useCallback } from 'react';

import PasswordCheck from '../component/PasswordCheck';
import MyPageForm from '../container/MyPageForm';

const MyPage = () => {
  const [userCheck, setUserCheck] = useState(false);

  const onCheck = useCallback(() => {
    setUserCheck(true);
  }, []);

  return <>{userCheck ? <MyPageForm /> : <PasswordCheck onCheck={onCheck} />}</>;
};

export default MyPage;
