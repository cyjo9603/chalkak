import styled from 'styled-components';

export default styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.PRIMARY_COLOR};

  & > div {
    width: 1200px;
    height: 60px;
    color: ${(props) => props.theme.BACKGROUND_COLOR};

    & > div:first-child {
      & > span:nth-child(-n + 2)::after {
        content: '|';
        color: ${(props) => props.theme.LIGHT_GREY};
        margin: 0 10px;
      }

      & > span:nth-child(n + 2) {
        color: ${(props) => props.theme.LIGHT_GREY};
      }
    }

    @media (max-width: ${(props) => props.theme.BREAK_POINT.HDPC}px) {
      padding: 0 10px;
    }

    @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
      text-align: center;
    }
  }
`;
