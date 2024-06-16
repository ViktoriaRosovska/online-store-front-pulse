import { useEffect } from "react";
import { Backdrop, CloseButton, ModalContant } from "./CommonModal.styled";
import { ReactComponent as CloseSvg } from "../../assets/svg/closeBtnSmall.svg";

const CommonModal = ({ onClose, children, padding, top, isSizeModal }) => {
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
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <Backdrop onClick={handleBackdropClick} $isSizeModal={isSizeModal}>
      <ModalContant $padding={padding} $isSizeModal={isSizeModal}>
        <CloseButton type="button" onClick={onClose} $top={top} $isSizeModal={isSizeModal}>
          <CloseSvg />
        </CloseButton>
        {children}
      </ModalContant>
    </Backdrop>
  );
};

export default CommonModal;
