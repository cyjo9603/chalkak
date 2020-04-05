import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 10px 16px;
`;

export const FriendCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  & > span {
    margin-left: 8px;
  }

  & > div {
    margin-left: 16px;
    font-size: 18px;
  }

  & > button {
    margin-left: auto;
  }
`;
