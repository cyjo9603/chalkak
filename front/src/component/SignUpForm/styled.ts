import styled from 'styled-components';
import { DatePicker, Modal } from 'antd';

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 60px;
  width: 400px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > div:nth-child(2) {
    height: 40px;
    padding: 8px 12px;
    margin-bottom: 4px;

    & > input {
      height: 20px;
    }
  }
`;

export const WarningWrapper = styled.div<{ level: number; color: 'WARNING_RED' | 'WARNING_YELLOW' | 'POSITIVE_GREEN' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > div:first-child {
    display: flex;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

    & > span {
      display: block;
      height: 8px;
      transition: width 0.5s;

      &:first-child {
        background-color: ${(props) => props.theme[props.color]};
        width: ${(props) => props.level * 33.3333}%;
      }

      &:last-child {
        background-color: ${(props) => props.theme.WARNING_NULL};
        width: ${(props) => (3 - props.level) * 33.3333}%;
      }
    }
  }

  & > div:last-child {
    font-size: 10px;
    color: ${(props) => props.theme[props.color]};
  }
`;

export const DoubleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > div {
    width: 48%;
    height: 40px;
    padding: 8px 12px;
    margin-bottom: 4px;

    & > input {
      height: 20px;
    }
  }
`;

export const DateWrapper = styled(DatePicker)`
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  border-radius: 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > div:nth-child(2) {
    height: 40px;
    padding: 8px 12px;
    margin-bottom: 4px;

    & > select {
      height: 20px;
    }
  }
`;

export const TermWrapper = styled.div`
  margin-bottom: 10px;

  & > span {
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }

  & > label {
    margin-left: 4px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 48%;
    height: 40px;
  }
`;

export const ModalWrapper = styled(Modal)`
  & .ant-modal-body > div {
    height: 200px;
    overflow: auto;
  }
`;
