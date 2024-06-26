import { StyledSelectMenuWrapper } from "components/CatalogComponent/CatalogHeader/CatalogHeader.styled";
import { useEffect } from "react";
import { Backdrop } from "./ModalSort.styled";

const ModalSort = ({onClose, children}) => {
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
        
            <StyledSelectMenuWrapper>
                {children}
                </StyledSelectMenuWrapper>
             
        </Backdrop>
    )
}

export default ModalSort