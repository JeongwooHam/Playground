import { MouseEventHandler } from "react";
import IconButton from "./IconButton";

type ButtonTheme = "line" | "mono" | "ghost";

interface HomeButtonProps {
  buttonTheme: ButtonTheme;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const line = "border border-black";
const mono = "bg-mono100 border-none";
const ghost = "bg-white border-none";

const THEME: Record<ButtonTheme, string> = {
  line,
  mono,
  ghost,
};

const HomeButton = ({ buttonTheme, onClick }: HomeButtonProps) => {
  return (
    <div className={`rounded-button-default p-3 ${THEME[buttonTheme]}`}>
      <IconButton iconPath='HOME' onClick={onClick} />
    </div>
  );
};

export default HomeButton;
