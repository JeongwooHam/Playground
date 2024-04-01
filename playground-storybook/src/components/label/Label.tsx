import "./label.css";

interface LabelProps {
  // htmlFor 텍스트를 타입을 지정하여 고정할 경우 확장성이 떨어질 수 있다.
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='text-sm text-tertiary' {...props}>
      {children}
    </label>
  );
};

export default Label;
