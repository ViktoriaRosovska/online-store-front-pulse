import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";

export const ShopCartDelivery = props => {
  let location = useLocation();

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
