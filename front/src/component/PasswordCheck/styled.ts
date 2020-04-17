import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 120px;
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    padding-top: 50px;
  }
`;
