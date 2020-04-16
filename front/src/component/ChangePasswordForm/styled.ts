import styled from 'styled-components';

export default styled.section`
  position: relative;
  top: 10%;
  width: 600px;
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  background-color: ${(props) => props.theme.WHITE_COLOR};

  & > form {
    display: flex;
    flex-direction: column;
    margin: 60px 80px;

    & > button {
      height: 40px;
    }
  }
`;
