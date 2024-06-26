import { MouseEventHandler, PropsWithChildren } from "react";

type ButtonTheme = "primary" | "secondary" | "social" | "text" | "disabled";

interface ButtonProps extends PropsWithChildren {
  isDisabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme: ButtonTheme;
  buttonStyle?: string;
  buttonName?: string;
}

const primary = "bg-primary text-white";
const secondary = "bg-secondary text-white";
const social = "bg-social text-primary";
const text = "bg-none text-primary";
const disabled = "disabled:bg-mono-100 disabled:text-mono-200";

const COLOR: Record<ButtonTheme, string> = {
  primary,
  secondary,
  social,
  text,
  disabled,
};

const PrimaryButton = ({
  isDisabled,
  theme,
  children,
  buttonStyle,
  buttonName,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`w-full h-[60px] rounded-button-default ${disabled} ${COLOR[theme]} ${buttonStyle}`}
      disabled={isDisabled}
      name={buttonName}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
