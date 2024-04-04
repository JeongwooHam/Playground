import ICONS from "../../constants/icons";

interface IconButtonProps {
  iconPath: keyof typeof ICONS;
  iconStyle?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // onClick: () => void
  // onClick: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({ iconPath, iconStyle, onClick }: IconButtonProps) => {
  const Icon = ICONS[iconPath];
  return (
    <button onClick={onClick} className={iconStyle}>
      <Icon />
    </button>
  );
};

export default IconButton;
