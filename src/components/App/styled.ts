import styled from 'styled-components';
import { NewMessageForm } from '../NewMessageForm';

export const AlignedNewMessageForm = styled(NewMessageForm)`
  margin-top: auto;
`;

export const BackgroundView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 47, 100);
  height: 100vh;
  width: 100%;
`;

export const StyledChatView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  align-items: center;
  width: 300px;
  max-height: 540px;
  height: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 19px 40px 16px rgba(0, 0, 0, 0.6);
`;
