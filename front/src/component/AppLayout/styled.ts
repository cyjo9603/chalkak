import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export const Section = styled.section`
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 100px;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.HDPC}px) {
    width: 100%;
  }
`;
