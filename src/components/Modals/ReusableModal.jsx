import { Backdrop, Modal, Content, CrossButton } from "./ReusableModal.styled";
import { Portal } from "./helpersForModal/modalPortal";
import BlackCross from "./helpersForModal/BlackCross";
import useEscapePress from "./helpersForModal/onEscapePress";

const closeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ReusableModal = ({ onClose, locked, children }) => {
  useEscapePress(onClose);

  return (
    <Portal>
      <Backdrop
        locked={locked}
        onClick={onClose}
        variants={closeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <Modal
        variants={closeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Content>
          <CrossButton
            onClick={onClose}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
          >
            <BlackCross />
          </CrossButton>
          {children}
        </Content>
      </Modal>
    </Portal>
  );
};

export default ReusableModal;
