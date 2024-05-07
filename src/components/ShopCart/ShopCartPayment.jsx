import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";

import { useLocation } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import { Title } from "components/Typography/Typography.styled";

export const ShopCartPayment = props => {
  const location = useLocation();

  return (
    <>
      <Title>{props.title}</Title>
      <StyledShopCartButton
        text={"Продовжити оформлення"}
        route={ROUTES.SHOPCARTPAYMENT}
        state={{ from: location }}
      />
    </>
  );
};
