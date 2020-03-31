import styled from 'styled-components';
import { Input, Menu } from 'antd';

export const HeaderWrapper = styled.header`
  position: fixed;
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  width: 100%;
  height: 50px;
  z-index: 1001;

  & > div {
    margin: 0 auto;
    display: flex;
    width: 1200px;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.HDPC}px) {
    & > div {
      padding: 0 10px;
      width: 100%;
    }
  }
`;

export const HeaderMenu = styled(Menu)`
  background-color: inherit;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  & img {
    height: 32px;
  }
`;

export const Search = styled(Input.Search)`
  margin-left: 10px;
  height: 30px;
  width: 500px;

  & input {
    color: black;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.PC}px) {
    width: 400px;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 200px;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.MOBILE}px) {
    flex: 1;
  }
`;

export const SignLink = styled(Menu.Item)`
  text-align: center;
  font-weight: 900;
  width: 100px;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 80px;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.MOBILE}px) {
    width: 100%;
  }
`;

export const UserAvatar = styled(Menu.Item)`
  text-align: center;
  & div {
    margin-left: 8px;
    display: inline;
    font-weight: 900;
  }

  @media (max-width: ${(props) => props.theme.BREAK_POINT.MOBILE}px) {
    width: 50px;
    & div {
      display: none;
    }
  }
`;
