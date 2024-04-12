import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal");

  return createPortal(children, modalRoot);
};
