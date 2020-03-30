import styled from 'styled-components';

export default styled.div<{ focus: boolean }>`
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
