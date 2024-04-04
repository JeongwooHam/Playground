import { MouseEventHandler } from "react";

interface TagButtonProps {
  children: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const TagButton = ({ children, isSelected, onClick }: TagButtonProps) => {
  const buttonStyleWithSelect = isSelected
    ? "bg-white text-primary border border-primary"
    : "text-white bg-primary";
  return (
    <button
      onClick={onClick}
      className={`rounded-tag-button px-[10px] h-[33px] ${buttonStyleWithSelect}`}
    >
      {children}
    </button>
  );
};

export default TagButton;
