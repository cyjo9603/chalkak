import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
import { Checkbox } from 'antd';

import { ModalWrapper } from './styled';

interface Props {
  termsCheck: boolean;
  onTermsCheck: () => void;
}

const Terms = memo(({ termsCheck, onTermsCheck }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [okAvailable, setOkAvailable] = useState(true);
  const modalRef = useRef<HTMLDivElement>();

  const onScroll = useCallback(() => {
    if (modalRef.current.scrollHeight === modalRef.current.clientHeight + modalRef.current.scrollTop) {
      setOkAvailable(false);
    }
  }, []);

  const showModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const modalHandleOk = useCallback(() => {
    onTermsCheck();
    setModalVisible(false);
  }, []);
  const modalHandleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const setRef = useCallback((ref: HTMLDivElement) => {
    modalRef.current = ref;
    if (modalRef.current) {
      modalRef.current.addEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [modalRef.current]);

  return (
    <>
      <span onClick={showModal}>약관에 동의합니다.</span>
      <Checkbox checked={termsCheck} />
      <ModalWrapper
        title="개인정보 수집 및 이용에 대한 안내"
        visible={modalVisible}
        onOk={modalHandleOk}
        onCancel={modalHandleCancel}
        cancelText="취소"
        okText="동의"
        okButtonProps={{ disabled: okAvailable }}
      >
        <div ref={setRef}>
          <p>chalkak은 사용자 및 보조사업자 등의 관리를 목적으로 다음과 같이 개인정보를 수집‧이용하고자 합니다.</p>
          <br />
          <p>1. 개인정보 수집 및 이용 목적</p>
          <p>사용자 관리 및 서비스 이용 도움</p>
          <br />
          <p>2. 수집하는 개인정보의 항목</p>
          <p>chalkak은 서비스 제공을 위해 필요한 최소한의 범위 내에서 다음과 같은 개인정보를 수집하고 있습니다.</p>
          <p>- 필수항목 : 이름, 생년월일, 성별, 전화번호, 이메일</p>
          <br />
          <p>※서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</p>
          <p>- 접속 IP 정보, 서비스 이용 기록, 접속 로그</p>
          <p>
            (위와 같이 자동 수집‧저장되는 정보는 보다 나은 서비스를 제공하기 위해, 홈페이지의 개선과 보완을 위한
            통계분석에 이용될 것입니다.)
          </p>
          <br />
          <p>3. 개인정보의 처리 및 보유기간</p>
          <p>5년 또는 회원 탈퇴될 경우 지체 없이 파기합니다.</p>
          <br />
          <p>4. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용</p>
          <p>
            필수로 수집하는 개인정보에 대해 동의를 거부할 권리가 있으며 필수항목에 대한 동의 거부 시 회원가입 등
            서비스에 대하여 제한됩니다.
          </p>
          <p>- 이름, 생년월일, 성별, 전화번호, 이메일</p>
        </div>
      </ModalWrapper>
    </>
  );
});

export default Terms;
