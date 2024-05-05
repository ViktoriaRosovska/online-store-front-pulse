import { createPortal } from "react-dom";

export const Portal = ({ isOpen, children }) => {
  return isOpen
    ? createPortal(children, document.getElementById('modal'))
    : null;
};
 