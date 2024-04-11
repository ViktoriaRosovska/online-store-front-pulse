import { motion } from "framer-motion";
import styled from "styled-components";

const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  max-width: 90%;
  max-height: 90%;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 11000;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 32px 24px 32px 24px;

  border-radius: 36px;

  background-color: var(--white-bg-color-favorite-btn);

  @media screen and (min-width: 768px) {
    padding: 68px 48px 68px 48px;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  // Hide scrollbar for Webkit browsers (e.g., Chrome, Safari)
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for IE, Edge, and Firefox
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  // Additional styling to ensure cross-browser compatibility
  // This ensures that scrolling still works with the scrollbar hidden
  -webkit-overflow-scrolling: touch;
`;

const CrossButton = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: absolute;
  right: 0;
  top: 0;

  background: none;

  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
`;

export { Backdrop, Modal, Content, CrossButton };
