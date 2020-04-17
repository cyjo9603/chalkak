import React, { useState, useCallback, memo } from 'react';
import { Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';

import { FormWrapper } from './styled';
import ImageUpload from './ImageUpload';
import { writePostRequest } from '../../reducers/post/writePost';

const { TextArea } = Input;

const WritePostForm = memo(() => {
  const dispatch = useDispatch();
  const [imageUploadVisible, setImageUploadVisible] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [uploadImages, setUploadImages] = useState<string[]>([]);

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if ((!postContent || !postContent.trim()) && uploadImages.length === 0) {
        return message.error('빈 게시물은 작성할 수 없습니다!');
      }
      dispatch(writePostRequest({ content: postContent, image: uploadImages }));
      setImageUploadVisible(false);
      setPostContent('');
      setUploadImages([]);
    },
    [postContent, uploadImages],
  );

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  }, []);

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
    <FormWrapper onSubmit={onSubmitForm}>
      <TextArea value={postContent} onChange={onChangeText} />
      <div className="post-form-button">
        <Button onClick={handleImageUpload}>이미지 업로드</Button>
        <Button type="primary" htmlType="submit">
          작성
        </Button>
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
});

export default WritePostForm;
