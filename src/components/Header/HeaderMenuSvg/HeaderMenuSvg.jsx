import { ReactComponent as BurgerMenu } from "../../../assets/svg/burger-menu.svg";
import { ReactComponent as CloseMenu } from "../../../assets/svg/closeBtnSmall.svg";
import { Button } from "./HeaderMenuSvg.styled";

const HeaderMenuSvg = ({ isOpen, onClose, onOpen, isFixed }) => {
  return (
    <div>
      {!isOpen ? (
        <Button onClick={onOpen} $isFixed={isFixed}>
          <BurgerMenu />
        </Button>
      ) : (
        <Button onClick={onClose} $isFixed={isFixed}>
          <CloseMenu />
        </Button>
      )}
    </div>
  );
};
export default HeaderMenuSvg;
