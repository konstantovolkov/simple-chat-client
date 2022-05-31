import styled from 'styled-components';

export const TypingForm = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TypingFormInputWrapper = styled.div<{ height?: number }>`
  position: relative;
  flex-basis: 100%;
  max-height: 100px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  transition: height 0.5s;
  box-sizing: border-box;
`;

export const TypingFormButton = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: rgb(18, 47, 100);
  outline: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 15px;
  padding: 15px;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 25px;
  resize: none;
  padding: 15px 20px;
  border: none;
  color: rgb(97, 113, 144);
  background-color: rgb(245, 243, 243);
  word-break: break-word;

  ::-webkit-scrollbar {
    display: none;
  }

  :focus {
    outline: none;
  }

  transition: height 2s;
`;

export const InputHeightAdjuster = styled.div`
  font-family: inherit;
  font-size: 16px;
  visibility: hidden;
  width: auto;
  padding: 15px 20px;
  min-height: 20px;
  word-break: break-word;
`;
