import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import {
  StyledButtonWrapper,
  StyledNotificationText,
  StyledNotificationWrapper,
} from "./EmptyShopCart.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation } from "react-router-dom";

export const EmptyShopCart = () => {
  let location = useLocation();
  return (
    <StyledNotificationWrapper>
      <StyledNotificationText>
        Тут з’являться товари додані до кошика. Почати покупки?
      </StyledNotificationText>
      <StyledButtonWrapper>
        <StyledShopCartButton
          text={"За покупками"}
          route={ROUTES.CATALOG}
          state={{ from: location }}
        />
      </StyledButtonWrapper>
    </StyledNotificationWrapper>
  );
};
