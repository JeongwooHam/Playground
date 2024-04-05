import type { MouseEventHandler } from "react";
import IconButton from "../Button/IconButton";

interface NavProps {
  isBackBtnShown: boolean;
  handleClickBackBtn?: MouseEventHandler<HTMLButtonElement>;
  isCloseBtnShown: boolean;
  handleClickCloseBtn?: MouseEventHandler<HTMLButtonElement>;
  isTitleShown: boolean;
  title?: string;
  isDark: boolean;
}

const Nav = ({
  isBackBtnShown,
  handleClickBackBtn = () => {},
  isCloseBtnShown,
  handleClickCloseBtn = () => {},
  isTitleShown,
  title = "",
  isDark,
}: NavProps) => {
  return (
    <div
      className={`flex nav-bar justify-between text-2xl ${isDark ? "text-white" : "text-primary"}`}
    >
      <div className='nav-title-wrapper flex'>
        {/*뒤로 가기 버튼*/}
        {isBackBtnShown && (
          <IconButton iconPath='BACK' onClick={handleClickBackBtn} />
        )}
        {/*페이지 제목*/}
        {isTitleShown && <h1>{title}</h1>}
      </div>
      {/*닫기 버튼*/}
      {isCloseBtnShown && (
        <IconButton iconPath='CLOSE' onClick={handleClickCloseBtn} />
      )}
    </div>
  );
};

export default Nav;
