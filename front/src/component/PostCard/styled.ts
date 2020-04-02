import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;

  & .ant-card-head-title {
    font-weight: 600;

    & > span {
      margin-right: 10px;
    }
  }
`;

export const ImageWrapper = styled.div`
  padding: 20px;

  & img {
    width: 100%;
  }
`;

export const MoreImageWrapeer = styled.div`
  & > img {
    width: 50%;
  }

  & > div {
    display: inline-block;
    width: 50%;
    text-align: center;
    vertical-align: middle;
  }
`;
