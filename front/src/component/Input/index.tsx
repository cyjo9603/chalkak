import React, { useState, useCallback, memo } from 'react';

import InputWrapper from './styled';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'password';
}

const Input = memo(({ placeholder, value, onChange, type }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <InputWrapper focus={isFocus}>
      <input
        placeholder={placeholder || ''}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        type={type}
      />
    </InputWrapper>
  );
});

export default Input;
