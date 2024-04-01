interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // onClick: () => void
  // onClick: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({ iconPath, alt, onClick }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
