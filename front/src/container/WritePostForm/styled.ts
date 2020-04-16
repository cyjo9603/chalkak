import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.WHITE_COLOR};
  padding: 10px;

  & > .post-form-button {
    margin: 6px 0 12px;
    display: flex;
    justify-content: space-between;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UploadButtonWrapper = styled.span`
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px dashed ${(props) => props.theme.LIGHT_GREY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const PreviewWrapper = styled.span<{ imgSrc: string }>`
  width: 100px;
  height: 100px;
  background-image: url('http://localhost:3065/${(props) => props.imgSrc}');
  background-size: 100px 100px;
  margin-right: 16px;
  margin-bottom: 16px;
  text-align: right;

  & > span {
    width: 20px;
    height: 20px;
  }

  &:hover {
    & > span {
    cursor: pointer;
  }
  }
`;
