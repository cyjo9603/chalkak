import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';

import { FormWrapper } from './styled';
import ImageUpload from './ImageUpload';

const { TextArea } = Input;

const WritePostForm = () => {
  const [imageUploadVisible, setImageUploadVisible] = useState(false);
  const [uploadImages, setUploadImages] = useState<string[]>([]);

  const handleImageUpload = useCallback(() => {
    setImageUploadVisible(!imageUploadVisible);
  }, [imageUploadVisible]);

  const addUploadImages = useCallback(
    (imgSrc: string[]) => {
      setUploadImages([...uploadImages, ...imgSrc]);
    },
    [uploadImages],
  );

  const removeUploadImage = useCallback(
    (index: number) => () => {
      const uploadImagesArr = [...uploadImages];
      uploadImagesArr.splice(index, 1);
      setUploadImages(uploadImagesArr);
    },
    [uploadImages],
  );

  return (
    <FormWrapper>
      <TextArea />
      <div className="post-form-button">
        <Button onClick={handleImageUpload}>이미지 업로드</Button>
        <Button type="primary">작성</Button>
      </div>
      {imageUploadVisible && (
        <ImageUpload
          uploadImages={uploadImages}
          addUploadImages={addUploadImages}
          removeUploadImage={removeUploadImage}
        />
      )}
    </FormWrapper>
  );
};

export default WritePostForm;
