import React, { memo } from 'react';
import { Button } from 'antd';

import MoreButtonWrapper from './styled';

interface Props {
  onClick: () => void;
}

const MoreButton = memo(({ onClick }: Props) => (
  <MoreButtonWrapper>
    <Button onClick={onClick}>더 보기</Button>
  </MoreButtonWrapper>
));

export default MoreButton;
