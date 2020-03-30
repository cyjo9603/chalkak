import React, { useState, useCallback } from 'react';

import SelectWrapper from './styled';

interface Props {
  value: string;
  option: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Input = ({ value, option, onChange }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <SelectWrapper focus={isFocus}>
      <select onFocus={onFocus} onBlur={onBlur} value={value} onChange={onChange}>
        <option value="">선택</option>
        {option.map((v) => (
          <option key={`select_gender_${v}`} value={v}>
            {v}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

export default Input;
