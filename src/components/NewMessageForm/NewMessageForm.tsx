import React, {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  TypingForm,
  TypingFormInputWrapper,
  InputHeightAdjuster,
  TextArea,
  TypingFormButton
} from './styled';

import { ReactComponent as SendIcon } from './assets/sendIcon.svg';

interface NewMessageFormProps {
  onSubmit: (newMessaage: string) => void;
  className?: string;
}

export const NewMessageForm = ({ onSubmit, className }: NewMessageFormProps) => {
  const [newMessage, setNewMessage] = useState('');
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number>();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    onSubmit(newMessage);
    setNewMessage('');
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const enterPressed = e.key === 'Enter';
    const newLineShortcut = enterPressed && e.shiftKey;

    if (newLineShortcut) return;

    if (enterPressed) {
      handleSubmit(e);
    }
  };

  const adjustHeight = () => {
    if (inputWrapperRef.current) {
      setWrapperHeight(inputWrapperRef.current.getBoundingClientRect().height);
    }
  };

  const handleTypingMessage: ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value } }) => {
    setNewMessage(value);
  };

  useEffect(() => {
    adjustHeight();
  }, [newMessage]);

  return (
    <TypingForm onSubmit={handleSubmit} className={className}>
      <TypingFormInputWrapper height={wrapperHeight}>
        <InputHeightAdjuster ref={inputWrapperRef}>{newMessage}</InputHeightAdjuster>
        <TextArea onChange={handleTypingMessage} value={newMessage} onKeyDown={handleKeyDown} />
      </TypingFormInputWrapper>
      <TypingFormButton type="submit">
        <SendIcon />
      </TypingFormButton>
    </TypingForm>
  );
};
