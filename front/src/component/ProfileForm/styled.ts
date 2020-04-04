import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 16px 12px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    margin-bottom: 16px;
  }

  & > div {
    width: 100%;

    & > div {
      margin-bottom: 10px;

      & span {
        color: ${(props) => props.theme.PRIMARY_COLOR};
        font-size: 18px;
      }

      &:first-child span {
        font-size: 24px;
      }
    }
  }
`;
