import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { RootState } from '../reducers';
import SignUpForm from '../container/SignUpForm';

const SignUp = () => {
  const id = useSelector((state: RootState) => state.user.info && state.user.info.id);

  useEffect(() => {
    Modal.warning({
      title: '주의!',
      content: (
        <div>
          <p>
            본 서비스는 포트폴리오 및 실력향상을 위해 테스트로 개발한 페이지로써 실제 개인정보에 대한 보안장치가 충분히
            적용되어 있지 않습니다.
          </p>
          <p>그러므로 회원정보를 입력하실 때에는 실제 개인정보 대신 가상의 정보를 입력해주시기 바랍니다.</p>
        </div>
      ),
    });
  }, []);

  useEffect(() => {
    if (id) {
      Router.push('/');
    }
  }, [id]);

  return <SignUpForm />;
};

export default SignUp;
