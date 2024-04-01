interface ErrorMessageProps {
  children: string;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className='text-xs text-error'>{children}</p>;
};

export default ErrorMessage;
