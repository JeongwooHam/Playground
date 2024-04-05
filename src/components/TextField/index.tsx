import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "../Button/IconButton";
import ICONS from "../../constants/icons";

interface TextFieldProps {
  id: string;
  errorMessage: string;
  iconPath: keyof typeof ICONS;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

const TextField = ({
  id,
  errorMessage,
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
        {!!value && <IconButton onClick={onIconClick} iconPath={iconPath} />}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextField;
