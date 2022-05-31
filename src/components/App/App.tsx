import React, { createContext, useEffect, useState } from 'react';
import { memo } from 'react';
import { ChatContextType } from '../../types/ChatContextType';
import { ChatData } from '../../types/ChatData';
import { MessageType } from '../../types/MessageType';
import { MessagesList } from '../MessagesList';
import { AlignedNewMessageForm, BackgroundView, StyledChatView } from './styled';

const webSocketUrl =
  process.env.NODE_ENV === 'production'
    ? `wss://${window.location.host}/chat`
    : 'ws://localhost:8080/chat';

const ws = new WebSocket(webSocketUrl);

export const App = () => {
  const [isWsReady, setIsWsReady] = useState(false);
  const [chatHistory, setChatHistory] = useState<MessageType[]>();
  const [authorId, setAuthorId] = useState<string>();

  const handleWsOpen = () => {
    setIsWsReady(true);
  };

  const handleWsMessage = ({ data }: MessageEvent) => {
    const parsedData = JSON.parse(data) as ChatData;
    const { yourAuthorId, history } = parsedData.data;

    setChatHistory(history);
    yourAuthorId && setAuthorId(yourAuthorId);
  };

  useEffect(() => {
    ws.addEventListener('message', handleWsMessage);

    ws.addEventListener('open', handleWsOpen);

    return () => {
      ws.removeEventListener('message', handleWsMessage);
      ws.removeEventListener('open', handleWsOpen);
    };
  }, []);

  const sendMessage = (newMessage: string) => {
    ws.send(
      JSON.stringify({
        message: newMessage
      })
    );
  };

  if (!isWsReady) return null;

  return (
    <ChatContextProvider yourAuthorId={authorId}>
      <BackgroundView>
        <StyledChatView>
          <MessagesList messages={chatHistory} />
          <AlignedNewMessageForm onSubmit={sendMessage} />
        </StyledChatView>
      </BackgroundView>
    </ChatContextProvider>
  );
};

export const ChatContext = createContext<ChatContextType>({
  yourAuthorId: undefined
});

export const ChatContextProvider = memo<{
  yourAuthorId?: string;
  children: React.ReactNode;
}>(({ children, yourAuthorId }) => {
  return (
    <ChatContext.Provider
      value={{
        yourAuthorId
      }}
    >
      {children}
    </ChatContext.Provider>
  );
});
