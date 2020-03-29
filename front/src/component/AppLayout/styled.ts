import styled from 'styled-components';

export default styled.section`
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.HDPC}px) {
    width: 100%;
  }
`;
