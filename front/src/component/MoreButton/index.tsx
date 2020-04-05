import React from 'react';
import { Button } from 'antd';

import MoreButtonWrapper from './styled';

interface Props {
  onClick: () => void;
}

const MoreButton = ({ onClick }: Props) => (
  <MoreButtonWrapper>
    <Button onClick={onClick}>더 보기</Button>
  </MoreButtonWrapper>
);

export default MoreButton;
