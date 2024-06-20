import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";

import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
  StyledPageWrapper,
} from "../ShopCart/ShopCart.styled";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";

import { ROUTES } from "../../../utils/routes";

import { ShopCard } from "../ShopCard/ShopCard";

import {
  selectPromoCode,
  selectPromoCodeDiscount,
  selectPromoExpired,
  selectPromoInvalid,
  selectPromoValid,
} from "../../../redux/promoCode/promoCodeSelector";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { discountPrice } from "../../../utils/discountPrice";

import { normalize_count_form } from "../../../utils/normalize_count_form";
import { PromoCode } from "components/PromoCode";
import {
  selectUserShopCart,
  selectUserShopCartState,
} from "../../../redux/user/userShopCart/userShopCartSelector";
import { addShopCartPromoCode } from "../../../redux/user/userShopCart/userShopCartSlice";
import {
  PromoExpired,
  PromoInvalid,
  PromoValid,
} from "../../../redux/promoCode/promoCodeSlice";

export const ShopCart = props => {
  const { products, priceSum, countQuantity, code } =
    useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  const shopcart = useSelector(selectUserShopCartState);
  console.log(shopcart);
  console.log(code);

  let location = useLocation();
  const promoCode = useSelector(selectPromoCode);
  const isPromoValid = useSelector(selectPromoValid);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoExpired = useSelector(selectPromoExpired);

  console.log(isPromoValid);
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const discount = useSelector(selectPromoCodeDiscount);

  const getCode = code => {
    console.log("promocode", code);
  };

  return (
    <>
      <Title>{props.title}</Title>
      <StyledPageWrapper>
        {products && products.length > 0 ? (
          <>
            <ul>
              {products.map((el, idx) => {
                return (
                  <ShopCard
                    el={el}
                    key={el._id + "#" + idx}
                    showCloseBtn={true}
                    showDeliveryPrice={false}
                    device={isDesktop ? "desktop" : "mobile"}
                  />
                );
              })}
            </ul>
            <StyledOrderWrapper>
              <div>
                <StyledOrderTitle>Твоє замовлення</StyledOrderTitle>
                <StyledOrderPriceTextWrapper>
                  <StyledOrderText>
                    <span>
                      {countQuantity}&nbsp;
                      {normalize_count_form(countQuantity, [
                        "товар",
                        "товари",
                        "товарів",
                      ])}
                    </span>
                    <span>{priceSum}&nbsp;грн</span>
                  </StyledOrderText>

                  <StyledOrderText>
                    <div>
                      <p>Усього</p>
                      <StyledPDVText>Включно з ПДВ</StyledPDVText>
                    </div>
                    <span>
                      {isPromoValid
                        ? discountPrice(priceSum, discount)
                        : priceSum}
                      &nbsp;грн
                    </span>
                  </StyledOrderText>
                </StyledOrderPriceTextWrapper>
              </div>

              <PromoCode getCode={() => getCode} code={promoCode} />

              <StyledShopCartButton
                text={"Оформити"}
                route={ROUTES.SHOPCARTDELIVERY}
                state={{ from: location }}
                // onClick={() => dispatch(addShopCartPromoCode("code"))}
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
