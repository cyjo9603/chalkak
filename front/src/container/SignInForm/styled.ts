import styled from 'styled-components';

export default styled.form`
  position: relative;
  top: 20%;
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

  @media (max-width: ${(props) => props.theme.BREAK_POINT.PC}px) {
    border: none;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    top: 20px;
  }
`;
