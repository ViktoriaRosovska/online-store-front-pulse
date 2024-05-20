import { Portal } from "../helpersForModal/modalPortal";
import CommonModal from "../CommonModal";
import ModalAuth from "../ModalAuth/ModalAuth";
import ModalForgotPassword from "../ModalForgotPassword/ModalForgotPassword";

const ParenModalForAuth = ({
  isAuthModalOpen,
  closeAuthModal,
  openForgotPasswordModal,
  openLoginModal,
  closeForgotPasswordModal,
  isForgotPasswordModalOpen,
}) => {
  return (
    <>
      <Portal isOpen={isAuthModalOpen}>
        <CommonModal onClose={closeAuthModal} padding="68px 164px" top="68px">
          <ModalAuth
            onClose={closeAuthModal}
            openForgotPasswordModal={openForgotPasswordModal}
          />
        </CommonModal>
      </Portal>

      <Portal isOpen={isForgotPasswordModalOpen}>
        <CommonModal
          onClose={closeForgotPasswordModal}
          padding="68px 164px"
          top="68px"
        >
          <ModalForgotPassword onClose={closeForgotPasswordModal} openLoginModal={openLoginModal} />
        </CommonModal>
      </Portal>
    </>
  );
};

export default ParenModalForAuth;
