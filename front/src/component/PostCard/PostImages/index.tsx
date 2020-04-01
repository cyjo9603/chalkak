import React, { useState, useCallback } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { MoreImageWrapeer } from '../styled';

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
      <>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
      </>
    );
  }

  if (images.length === 2) {
    return (
      <div>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
        <img src={images[1]} alt="게시글 이미지" onClick={onZoom} />
      </div>
    );
  }

  return (
    <>
      <MoreImageWrapeer>
        <img src={images[0]} alt="게시글 이미지" onClick={onZoom} />
        <div>
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
      </MoreImageWrapeer>
    </>
  );
};

export default PostImages;
