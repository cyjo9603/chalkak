import styled from 'styled-components';
import { Card } from 'antd';

export default styled(Card)`
  width: calc(100% - 10px);
  border-radius: 15px;
  margin: 0 0 10px 10px;

  @media (max-width: ${(props) => props.theme.BREAK_POINT.TABLET}px) {
    width: 100%;
    margin-left: 0;
  }
`;
