import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { RootState } from '../reducers';
import SignInForm from '../container/SignInForm';

const SignIn = () => {
  const id = useSelector((state: RootState) => state.user.info && state.user.info.id);

  useEffect(() => {
    if (id) {
      Router.push('/');
    }
  }, [id]);

  return <SignInForm />;
};

export default SignIn;
