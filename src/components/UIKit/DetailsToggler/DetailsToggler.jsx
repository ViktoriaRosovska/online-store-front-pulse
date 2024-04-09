import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { DetailsToggleButton, DetailsWrapper } from "./DetailsToggler.styled";

const DetailsToggler = ({ children, summary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(ps => !ps);

  return (
    <DetailsWrapper>
      <div>{summary}</div>
      {isOpen && children}
      <DetailsToggleButton type="button" onClick={toggle}>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </DetailsToggleButton>
    </DetailsWrapper>
  );
};

export default DetailsToggler;
