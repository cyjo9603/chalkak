import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';

import { FormWrapper } from './styled';
import ImageUpload from './ImageUpload';

const { TextArea } = Input;

const WritePostForm = () => {
  const [imageUploadVisible, setImageUploadVisible] = useState(false);

  const handleImageUpload = useCallback(() => {
    setImageUploadVisible(!imageUploadVisible);
  }, [imageUploadVisible]);

  return (
    <FormWrapper>
      <TextArea />
      <div className="post-form-button">
        <Button onClick={handleImageUpload}>이미지 업로드</Button>
        <Button type="primary">작성</Button>
      </div>
      {imageUploadVisible && <ImageUpload />}
    </FormWrapper>
  );
};

export default WritePostForm;
