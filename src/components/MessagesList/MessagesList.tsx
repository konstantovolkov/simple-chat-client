import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { MessageType } from '../../types/MessageType';
import { Message } from '../../components/Message';
import React, { useContext } from 'react';
import { ChatContext } from '../App/App';

interface MessagesListProps {
  messages?: MessageType[];
}

const TRANSITION_CLASS_NAME = 'message-bubbling';

const divideMessage = (authorId?: string, yoursId?: string) =>
  authorId === yoursId ? 'yours' : 'others';

export const MessagesList = ({ messages }: MessagesListProps) => {
  const { yourAuthorId } = useContext(ChatContext);

  if (!messages) {
    return null;
  }

  return (
    <StyledTransitionGroup>
      {messages.map(({ text, id, authorId }) => (
        <CSSTransition key={id} timeout={300} classNames={TRANSITION_CLASS_NAME}>
          <MessageWithTransitionStyle
            transitionClassName={TRANSITION_CLASS_NAME}
            text={text}
            whose={divideMessage(authorId, yourAuthorId)}
          />
        </CSSTransition>
      ))}
    </StyledTransitionGroup>
  );
};

interface MessageWithTransitionStyleProps {
  transitionClassName: string;
}

const extractTransitionClassName = ({ transitionClassName }: MessageWithTransitionStyleProps) =>
  transitionClassName;

const MessageWithTransitionStyle = styled(Message)<MessageWithTransitionStyleProps>`
  &.${extractTransitionClassName}-enter {
    opacity: 0;
    transform: translateY(100%);
  }
  &.${extractTransitionClassName}-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.${extractTransitionClassName}-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.${extractTransitionClassName}-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 300ms, transform 300ms;
  }
`;

const StyledTransitionGroup = styled(TransitionGroup as any)`
  display: flex;
  flex-direction: column;

  width: 100%;
  grid-row-gap: 10px;
` as unknown as typeof TransitionGroup;
