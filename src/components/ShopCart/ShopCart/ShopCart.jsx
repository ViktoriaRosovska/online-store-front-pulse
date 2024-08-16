import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { YourOrderPriceComponent } from "./YourOrderPriceComponent/YourOrderPriceComponent";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";

import { Title } from "components/Typography/Typography.styled";
import {
  StyledOrderWrapper,
  StyledPageWrapper,
} from "../ShopCart/ShopCart.styled";
import { ShopCartProductsListWithCloseBtn } from "../ShopCartProductsListWithCloseBtn";
import { PromoCode } from "components/PromoCode";
import { EmptyShopCart } from "../EmptyShopCart/EmptyShopCart";

export const ShopCart = props => {
  const { products, priceSum, totalPriceSum, countQuantity } =
    useSelector(selectUserShopCart);

  let location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{products.length > 0 ? props.title : "Кошик порожній"}</Title>
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
          <EmptyShopCart />
        )}
      </StyledPageWrapper>
    </>
  );
};
