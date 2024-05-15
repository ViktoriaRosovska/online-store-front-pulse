import CommonModal from "components/Modals/CommonModal";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import { useState } from "react";
import { Button, List, StyledTitle } from "./UserWalletList.styled";
import UserPaymentForm from "components/form/UserPaymentForm/UserPaymentForm";
import { useGetUserCardsQuery } from "../../../redux/user/userSlice/userApi";
import UserWalletCard from "../UserWalletCard/UserWalletCard";
import {ReactComponent as PlusSvg} from '../../../assets/svg/plus.svg'

const UserWalletList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetUserCardsQuery();

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    console.log("close");
    setIsOpen(false);
  };

  return (
    <>
      <List>
        {data?.length
          ? data.map(card => <UserWalletCard key={card._id} card={card} />)
          : null}
      </List>
      <Button type="button" onClick={handleOpenMenu}>
        <PlusSvg/> Додати банківську карту
      </Button>

      <Portal isOpen={isOpen}>
        <CommonModal onClose={handleCloseMenu} padding="35px 70px">
          <StyledTitle>
            Введіть номер вашої картки для зручної оплати
          </StyledTitle>
          <UserPaymentForm onClose={handleCloseMenu} />
        </CommonModal>
      </Portal>
    </>
  );
};

export default UserWalletList;
