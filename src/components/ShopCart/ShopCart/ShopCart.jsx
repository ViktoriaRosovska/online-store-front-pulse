import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { YourOrderPriceComponent } from "./YourOrderPriceComponent/YourOrderPriceComponent";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";

import { Title } from "components/Typography/Typography.styled";
import {
  StyledNotificationWrapper,
  StyledOrderWrapper,
  StyledPageWrapper,
} from "../ShopCart/ShopCart.styled";
import { ShopCartProductsListWithCloseBtn } from "../ShopCartProductsListWithCloseBtn";
import { PromoCode } from "components/PromoCode";

export const ShopCart = props => {
  const { products, priceSum, totalPriceSum, countQuantity } =
    useSelector(selectUserShopCart);

  let location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{props.title}</Title>
      <StyledPageWrapper>
        {products && products.length > 0 ? (
          <>
            <ShopCartProductsListWithCloseBtn
              products={products}
              isDesktop={isDesktop}
            />
            <StyledOrderWrapper>
              <YourOrderPriceComponent
                priceSum={priceSum}
                totalPriceSum={totalPriceSum}
                countQuantity={countQuantity}
              />
              <PromoCode />

              <StyledShopCartButton
                text={"Оформити"}
                route={ROUTES.SHOPCARTDELIVERY}
                state={{ from: location }}
              />
            </StyledOrderWrapper>
          </>
        ) : (
          <StyledNotificationWrapper>
            У вашому кошику ще немає товарів
          </StyledNotificationWrapper>
        )}
      </StyledPageWrapper>
    </>
  );
};
