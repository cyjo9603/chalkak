import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => props.theme.WHITE_COLOR};
  display: flex;
  padding: 20px 30px;
  width: 100%;
  margin-bottom: 16px;

  & > div {
    width: 50%;
  }

  & > div:last-child > span {
    float: right;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.MOBILE}px) {
    flex-direction: column-reverse;

    & > div {
      width: 100%;
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
    }
  }
`;
