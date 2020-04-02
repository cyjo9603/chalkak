import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  margin: 10px 0 20px;
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

export const ModalImage = styled.img`
  width: 100%;
`;
