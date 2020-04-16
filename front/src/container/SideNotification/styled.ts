import styled from 'styled-components';
import { Card } from 'antd';

export const NotifyWrapper = styled(Card)`
  width: calc(100% - 10px);
  border-radius: 15px;
  margin: 0 0 10px 10px;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const DoubleButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  & > button {
    width: 47%;
  }
`;
