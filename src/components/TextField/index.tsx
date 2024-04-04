import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface TextFieldProps {
  id: string;
  errorMessage: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

const TextField = ({
  id,
  errorMessage,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = () => {
    if (isError) return "border-error";
    if (isFocused) return "border-secondary";
    if (!value) return "border-primary";
    return "border-secondary";
  };
  return (
    <div className='relative'>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor()}`}
      >
        <input
          id={id}
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextField;
