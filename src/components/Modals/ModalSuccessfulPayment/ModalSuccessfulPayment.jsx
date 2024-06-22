import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import {
  StyledModalOrderText,
  StyledModalSuccessfulWrapper,
} from "./ModalSuccessfulPayment.styled";
import { useEffect, useState } from "react";
import { StyledOrderTitle } from "components/ShopCart/ShopCart/ShopCart.styled";

export const ModalSuccessfulPayment = () => {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClick(true);
    }, 3000);
    if (click) navigate(ROUTES.SHOPCARTSUCCESSFULL);
    return () => clearTimeout(timeoutId);
  }, [click, navigate]);

  return (
    <StyledModalSuccessfulWrapper>
      <StyledOrderTitle>Вітаю</StyledOrderTitle>
      <StyledModalOrderText> Ви успішно здійснили оплату</StyledModalOrderText>
      <StyledShopCartButton
        onClick={() => setClick(true)}
        text="Переглянути замовлення"
      />
    </StyledModalSuccessfulWrapper>
  );
};
