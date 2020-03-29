import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  top: 50%;
  width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  padding: 60px 120px;

  & > button {
    height: 50px;
    font-weight: 900;
  }

  & > div:last-child {
    align-self: flex-end;

    & a {
      color: ${(props) => props.theme.DARK_GREY};
      font-size: 12px;
      font-weight: 900;
    }

    & a:hover {
      color: ${(props) => props.theme.PRIMARY_COLOR};
    }
  }
`;

export const InputWrapper = styled.div<{ focus: boolean }>`
  border: 1px solid ${(props) => (props.focus ? props.theme.INPUT_FOCUS_COLOR : props.theme.LIGHT_GREY)};
  padding: 10px 14px;
  margin-bottom: 14px;

  & > input {
    width: 100%;
    height: 28px;
    border: none;
    cursor: pointer;
  }
`;
