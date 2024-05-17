import { useEffect } from "react";
import { Backdrop, CloseButton, ModalContant } from "./CommonModal.styled";
import {ReactComponent as CloseSvg} from '../../assets/svg/closeBtnSmall.svg'

const CommonModal = ({ onClose, children, padding, top }) => {
  const handleKeyDown = event => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContant $padding={padding}>
        <CloseButton type="button" onClick={onClose} $top={top}>
          <CloseSvg/>
        </CloseButton>
        {children}
      </ModalContant>
    </Backdrop>
  );
};

export default CommonModal;
