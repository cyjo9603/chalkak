import React, { useState, useCallback } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { ImageWrapper, MoreImageWrapeer } from '../styled';

interface Props {
  images: string[];
}

const PostImages = ({ images }: Props) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <ImageWrapper>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
      </ImageWrapper>
    );
  }

  if (images.length === 2) {
    return (
      <ImageWrapper>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
        <img src={images[1]} alt="게시글 이미지" onClick={onZoom} />
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
      <MoreImageWrapeer>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
        <div>
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
      </MoreImageWrapeer>
    </ImageWrapper>
  );
};

export default PostImages;
