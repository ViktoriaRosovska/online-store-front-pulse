import { useState } from "react";
import {
  DetailsToggleBtn,
  DetailsWrapper
} from "./DetailsTogglerSecond.styled";

const DetailsTogglerSecond = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(ps => !ps);
  
  return (
    <DetailsWrapper>
      {isOpen && children}
      <DetailsToggleBtn type="button" onClick={toggle}>
        {isOpen ? "Згорнути" : "Розгорнути"}
      </DetailsToggleBtn>
    </DetailsWrapper>
  );
};

export default DetailsTogglerSecond;
