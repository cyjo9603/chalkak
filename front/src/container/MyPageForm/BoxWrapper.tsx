import React, { memo } from 'react';
import { Input } from 'antd';

import { Box } from './styled';

interface Props {
  isEditing: boolean;
  title: string;
  store: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: number;
}

const BoxWrapper = memo(({ isEditing, title, store, value, onChange, size }: Props) => (
  <Box size={size}>
    <h1>{title}</h1>
    <div>{isEditing ? <Input value={value} onChange={onChange} /> : store}</div>
  </Box>
));

export default BoxWrapper;
