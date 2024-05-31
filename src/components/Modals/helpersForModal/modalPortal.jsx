import { createPortal } from "react-dom";

export const Portal = ({ isOpen, children, burgerModal }) => {
  return isOpen
    ? createPortal(children, document.getElementById(burgerModal ? 'root' : 'modal'))
    : null;
};
 