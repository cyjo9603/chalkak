import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

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
  display: flex;
  justify-content: space-between;

  & > img {
    width: 48%;
  }

  & > div {
    display: inline-block;
    width: 48%;
    text-align: center;
    align-self: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & > header {
    height: 50px;
    background-color: ${(props) => props.theme.PRIMARY_COLOR};
    position: relative;
    padding: 0;
    text-align: center;

    & > h1 {
      margin: 0;
      font-size: 17px;
      color: ${(props) => props.theme.WHITE_COLOR};
      line-height: 44px;
    }
  }

  & > div {
    height: calc(100% - 44px);
    background-color: rgba(0, 0, 0, 0.95);

    & > div:last-child {
      text-align: center;

      & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: #313131;
        display: inline-block;
        text-align: center;
        color: #fff;
        font-size: 15px;
      }
    }
  }
`;

export const CloseButton = styled(CloseOutlined)`
  color: ${(props) => props.theme.WHITE_COLOR};
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 18px;
  cursor: pointer;
`;

export const ImageZoomWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & > img {
    width: 100%;
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const CommentFormWrapper = styled.div`
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 10px 16px;

  & > form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    & > textarea {
      width: calc(100% - 70px);
      height: 40px;
    }
  }
`;
