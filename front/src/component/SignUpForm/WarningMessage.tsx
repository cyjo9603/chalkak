import React from 'react';

import { WarningWrapper } from './styled';

const WARNING_NULL = 'WARNING_NULL' as const;
const WARNING_RED = 'WARNING_RED' as const;
const WARNING_YELLOW = 'WARNING_YELLOW' as const;
const POSITIVE_GREEN = 'POSITIVE_GREEN' as const;

const getWarningColor = (level: number) => {
  switch (level) {
    case 1:
      return WARNING_RED;
    case 2:
      return WARNING_YELLOW;
    case 3:
      return POSITIVE_GREEN;
    default:
      return WARNING_NULL;
  }
};

interface Props {
  level: number;
  message: string;
}

const WarningMessage = ({ level, message }: Props) => {
  const color = getWarningColor(level);

  return (
    <WarningWrapper level={level} color={color}>
      <div>
        <span />
        <span />
      </div>
      <div>{message}</div>
    </WarningWrapper>
  );
};

export default WarningMessage;
