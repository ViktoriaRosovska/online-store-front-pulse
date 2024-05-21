import CommonModal from "components/Modals/CommonModal";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import { useState } from "react";
import { Button, List, StyledTitle } from "./UserWalletList.styled";
import UserPaymentForm from "components/form/UserPaymentForm/UserPaymentForm";
import { useGetUserCardsQuery } from "../../../redux/user/userSlice/userApi";
import UserWalletCard from "../UserWalletCard/UserWalletCard";
import { ReactComponent as PlusSvg } from "../../../assets/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentCard } from "../../../redux/paymentCard/paymentCardSelector";
import {
  deselectCard,
  selectCard,
} from "../../../redux/paymentCard/paymentCardSlice";

const UserWalletList = () => {
  const dispatch = useDispatch();
  const selectedCard = useSelector(selectPaymentCard);

  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetUserCardsQuery();

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSelectCard = card => {
    dispatch(selectCard(card));
  };

  const handleDeselectCard = () => {
    dispatch(deselectCard());
  };

  return (
    <>
      <List>
        {data?.length
          ? data.map(card => (
              <UserWalletCard
                key={card._id}
                card={card}
                onSelect={handleSelectCard}
                onDeselect={handleDeselectCard}
                isSelected={selectedCard?._id === card._id}
              />
            ))
          : null}
      </List>
      <Button type="button" onClick={handleOpenMenu}>
        <PlusSvg /> Додати банківську карту
      </Button>

      <Portal isOpen={isOpen}>
        <CommonModal onClose={handleCloseMenu} padding="35px 70px" top="37px">
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
