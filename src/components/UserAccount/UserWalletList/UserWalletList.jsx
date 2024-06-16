import CommonModal from "components/Modals/CommonModal";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import { useEffect, useState } from "react";
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
  // console.log("UserWalletList  selectedCard", selectedCard)

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

  useEffect(() => {
    if (data?.length === 0) {
      handleDeselectCard();
    } else if (
      data?.length &&
      (!selectedCard || !data?.find(card => card._id === selectedCard._id))
    ) {
      handleSelectCard(data[0]);
    }
  }, [data, selectedCard]);

  return (
    <>
      <List>
        {data?.length
          ? data.map((card, index) => (
              <UserWalletCard
                key={card._id}
                card={card}
                onSelect={handleSelectCard}
                onDeselect={handleDeselectCard}
                isSelected={
                  selectedCard ? selectedCard?._id === card._id : index === 0
                }
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
