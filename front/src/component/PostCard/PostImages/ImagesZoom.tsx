import React, { useState } from 'react';
import Slick from 'react-slick';

import { Overlay, CloseButton, ImageZoomWrapper } from '../styled';

interface Props {
  images: string[];
  onClose: () => void;
}

const ImagesZoom = ({ images, onClose }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose} />
      </header>
      <div>
        <Slick
          initialSlide={0}
          afterChange={(slide) => setCurrentSlide(slide)}
          infinite={false}
          arrows
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((v) => (
            <ImageZoomWrapper key={`div${v}`}>
              <img src={v} alt="post_image" />
            </ImageZoomWrapper>
          ))}
        </Slick>
        <div>
          <div>
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ImagesZoom;
