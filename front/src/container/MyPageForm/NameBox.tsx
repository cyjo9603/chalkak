import React, { memo } from 'react';
import { Input } from 'antd';

import { NameBoxWrapper } from './styled';

interface Props {
  isEditing: boolean;
  firstNameStore: string;
  firstNameValue: string;
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  familyNameStore: string;
  familyNameValue: string;
  onChangeFamilyName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameBox = memo(
  ({
    isEditing,
    firstNameStore,
    firstNameValue,
    onChangeFirstName,
    familyNameStore,
    familyNameValue,
    onChangeFamilyName,
  }: Props) => (
    <NameBoxWrapper size={100}>
      <h1>이름</h1>
      <div>
        {isEditing ? (
          <>
            <Input value={familyNameValue} onChange={onChangeFamilyName} />
            <Input value={firstNameValue} onChange={onChangeFirstName} />
          </>
        ) : (
          familyNameStore + firstNameStore
        )}
      </div>
    </NameBoxWrapper>
  ),
);

export default NameBox;
