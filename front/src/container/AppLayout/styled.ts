import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export const Section = styled.section`
  padding-top: 70px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  padding-bottom: 100px;
  justify-content: center;

  & > div {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.HDPC}px) {
    width: 100%;

    & > div {
      width: 90%;
    }
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    & > div {
      flex-wrap: wrap-reverse;
    }
  }
`;

export const Notify = styled.aside`
  width: 30%;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 100%;
  }
`;

export const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 100%;
  }
`;
