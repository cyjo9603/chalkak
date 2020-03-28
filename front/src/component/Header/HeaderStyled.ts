import styled from 'styled-components';
import { Input, Menu } from 'antd';

import { Theme } from '../../theme';

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  position: fixed;
  width: 100%;
  height: 50px;
`;

export const HeaderMenu = styled(Menu)<{ theme: Theme }>`
  background-color: ${(props) => props.theme.PRIMARY_COLOR};
  margin: 0 auto;
  width: 1200px;
  height: calc(100% + 1px);
  display: flex;
  justify-content: flex-end;

  & img {
    height: 32px;
  }

  & > li {
    padding: 0;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  margin-right: auto;

  @media (max-width: 1200px) {
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    & > li:last-child > span {
      width: 500px;
    }
  }

  @media (max-width: 480px) {
    & > li:last-child > span {
      width: 300px;
    }
  }
`;

export const Logo = styled(Menu.Item)`
  margin-right: 10px;
`;

export const Search = styled(Input.Search)`
  width: 500px;
  height: 30px;

  & input {
    color: black;
  }
`;

export const SignLink = styled(Menu.Item)<{ theme: Theme }>`
  width: 100px;
  text-align: center;
  font-weight: 900;

  @media (max-width: 1200px) {
    & > li:last-child {
      padding-right: 10px;
    }
  }
`;
