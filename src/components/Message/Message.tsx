import { MessageWrapper } from './styled';

interface MessageProps {
  text: string;
  date?: Date;
  className?: string;
  whose: 'yours' | 'others';
}

export const Message = ({ text, className, whose }: MessageProps) => {
  return (
    <MessageWrapper className={className} whose={whose}>
      {text}
    </MessageWrapper>
  );
};
