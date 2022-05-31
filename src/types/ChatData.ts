import { MessageType } from './MessageType';

export interface ChatData {
  data: {
    message?: MessageType;
    history: MessageType[];
    yourAuthorId?: string;
  };
}
