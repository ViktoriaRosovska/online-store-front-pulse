import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

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
  selectPromoCodeDiscount,
  selectPromoValid,
} from "../../../redux/promoCode/promoCodeSelector";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { discountPrice } from "../../../utils/discountPrice";

import { normalize_count_form } from "../../../utils/normalize_count_form";
import { PromoCode } from "components/PromoCode";
// import { useState } from "react";
export const ShopCart = props => {
  const items = useSelector(selectUserShopCart).products;
  const userShopCart = useSelector(selectUserShopCart);
  const priceSum = userShopCart?.priceSum;
  const countQuantity = userShopCart?.countQuantity;

  console.log("userShopCart", userShopCart);
  // console.log(items);
  let location = useLocation();

  const isPromoValid = useSelector(selectPromoValid);

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const discount = useSelector(selectPromoCodeDiscount);
  console.log(discount);
  // const [check, setCheck] = useState(false);
  // const onCheckPromo = condition => {
  //   setCheck(condition);
  //   console.log(condition);
  // };

  // console.log(check);
  return (
    <>
      <Title>{props.title}</Title>
      <StyledPageWrapper>
        {items && items.length > 0 ? (
          <>
            <ul>
              {items.map((el, idx) => {
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

              <PromoCode />
              {/* <PromoCode onCheckPromo={() => onCheckPromo()} /> */}
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
