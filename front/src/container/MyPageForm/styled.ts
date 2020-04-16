import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 10px 12px;

  & > header {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
  }

  & > hr {
    margin: 12px 0;
    border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  }

  & > section {
    & > div:first-child {
      display: flex;
      justify-content: space-between;

      & > div:first-child {
        width: 50%;
      }

      & > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;

        & > button {
          margin-top: 4px;
          width: 60px;
        }
      }
    }

    & > div:last-child {
      margin-top: 20px;
      display: flex;
    }
  }
`;

export const Box = styled.div<{ size: number }>`
  width: ${(props) => props.size}%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-weight: 900;
    font-size: 18px;
  }

  & > div {
    align-self: flex-start;
  }
`;

export const NameBoxWrapper = styled(Box)`
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > input {
      width: 48%;
    }
  }
`;
