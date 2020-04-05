import styled from 'styled-components';

export const SettingWrapper = styled.div`
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 10px 16px;
  width: 100%;

  & > div:first-child {
    font-size: 22px;
  }

  & > div {
    margin-bottom: 10px;
  }
`;

export const TitleBox = styled.div`
  font-size: 18px;
  margin-left: 4px;
`;

export const SettingContent = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: center;
  font-size: 16px;

  & > button {
    margin-left: 8px;
  }
`;
