import styled, { css } from 'styled-components';

interface MessageWrapperProps {
  whose: 'yours' | 'others';
}

const othersMessageStyle = css`
  margin-right: auto;
  border-radius: 15px 15px 15px 0;
  background-color: rgb(245, 243, 243);
`;

const yoursMessageStyle = css`
  margin-left: auto;
  border-radius: 15px 15px 0 15px;
  background-color: rgb(55, 74, 110);
  color: white;
`;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  padding: 10px;
  max-width: 60%;

  ${({ whose }) => whose === 'others' && othersMessageStyle}

  ${({ whose }) => whose === 'yours' && yoursMessageStyle}
`;
