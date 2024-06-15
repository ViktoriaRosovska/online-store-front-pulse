import { ReactComponent as MasterCardSvg } from "../../../assets/svg/mastercard.svg";
import { ReactComponent as VisaCardSvg } from "../../../assets/svg/visacard.svg";
import { ReactComponent as CheckedSvg } from "../../../assets/svg/done.svg";
import {ReactComponent as TrashSvg} from '../../../assets/svg/trash.svg'
import { Box, CardInfo, CheckedBox, DeleteButton } from "./UserWalletCard.styled";
// import { useState } from "react";
import { useDeleteUserCardMutation } from "../../../redux/user/userSlice/userApi";

const UserWalletCard = ({ card, isSelected, onSelect, onDeselect }) => {
  console.log("UserWalletCard  isSelected", isSelected)
  // const [checkedCard, setCheckedCard] = useState()
  const [deleteUserCard] = useDeleteUserCardMutation()
  const formatCardNumber = cardNumber => {
    const formatted = "**** **** **** " + cardNumber.substring(12);
    return formatted;
  };

  const formatDateCard = cardDate => {
    const [year, month] = cardDate.split("-");
    return month + "/" + year.substring(2);
  };

  const handleToggleCard = () => {
    // setCheckedCard(!checkedCard)
    if (isSelected) {
      onDeselect()
    } else {
      onSelect(card)
    }
  }

  const handleDeleteCard = async (id) => {
    try {
      const res = await deleteUserCard(id)
      console.log("handleDeleteCard  res", res)
    } catch (error) {
      console.log("handleDeleteCard  error", error)
      
    }
  }

  return (
    <Box $masterCard={card?.cardNumber[0] === "5"} onClick={handleToggleCard}>
      {card?.cardNumber[0] === "4" ? <VisaCardSvg /> : <MasterCardSvg />}
      <CardInfo>
        {formatCardNumber(card?.cardNumber)} ({formatDateCard(card?.cardDate)})
      </CardInfo>
      
      {isSelected ? <CheckedBox><CheckedSvg /></CheckedBox> : null}
      <DeleteButton onClick={()=>handleDeleteCard(card?._id)}>Видалити <TrashSvg/></DeleteButton>
        
    </Box>
  );
};

export default UserWalletCard;
