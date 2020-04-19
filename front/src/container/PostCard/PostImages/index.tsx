import React, { useState, useCallback, memo } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { ImageWrapper, MoreImageWrapeer } from '../styled';
import ImageZoom from './ImagesZoom';
import { PostImage } from '../../../reducers/post';

interface Props {
  images: PostImage[];
}

const PostImages = memo(({ images }: Props) => {
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
        <ImageWrapper>
          <img src={`${images[0].src}`} alt="게시글 이미지" onClick={onZoom} />
        </ImageWrapper>
        {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <ImageWrapper>
          <MoreImageWrapeer>
            <img src={`${images[0].src}`} alt="게시글 이미지" onClick={onZoom} />
            <img src={`${images[1].src}`} alt="게시글 이미지" onClick={onZoom} />
          </MoreImageWrapeer>
        </ImageWrapper>
        {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <>
      <ImageWrapper>
        <MoreImageWrapeer>
          <img src={`${images[0].src}`} alt="게시글 이미지" onClick={onZoom} />
          <div>
            <PlusOutlined />
            <br />
            {images.length - 1}개의 사진 더보기
          </div>
        </MoreImageWrapeer>
      </ImageWrapper>
      {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
    </>
  );
});

export default PostImages;
