import { ReactComponent as MasterCardSvg } from "../../../assets/svg/mastercard.svg";
import { ReactComponent as VisaCardSvg } from "../../../assets/svg/visacard.svg";
import { ReactComponent as CheckedSvg } from "../../../assets/svg/done.svg";
import { Box, CardInfo, CheckedBox } from "./UserWalletCard.styled";
import { useState } from "react";

const UserWalletCard = ({ card }) => {
  const [checkedCard, setCheckedCard] = useState()
  const formatCardNumber = cardNumber => {
    const formatted = "**** **** **** " + cardNumber.substring(12);
    return formatted;
  };

  const formatDateCard = cardDate => {
    const [year, month] = cardDate.split("-");
    return month + "/" + year.substring(2);
  };

  const toggleCheckedCard = () => {
    setCheckedCard(!checkedCard)
  }

  return (
    <Box $masterCard={card?.cardNumber[0] === "5"} onClick={toggleCheckedCard}>
      {card?.cardNumber[0] === "4" ? <VisaCardSvg /> : <MasterCardSvg />}
      <CardInfo>
        {formatCardNumber(card?.cardNumber)} ({formatDateCard(card?.cardDate)})
      </CardInfo>
      
        {checkedCard ? <CheckedBox><CheckedSvg /></CheckedBox> : null}
        
    </Box>
  );
};

export default UserWalletCard;
