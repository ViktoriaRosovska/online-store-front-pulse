import { normalize_count_form } from "../../../../utils/normalize_count_form";
import {
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
  StyledYourOrderWrapper,
} from "../ShopCart.styled";

import { useDispatch, useSelector } from "react-redux";

import {
  selectPromoCode,
  selectPromoCodeDiscount,
} from "../../../../redux/promoCode/promoCodeSelector";

import { selectPromoValid } from "../../../../redux/promoCode/promoCodeSelector";
import { discountPrice } from "../../../../utils/discountPrice";
import { useEffect } from "react";
import { addShopCartTotalPriceSum } from "../../../../redux/user/userShopCart/userShopCartSlice";

export const YourOrderPriceComponent = ({
  priceSum,
  countQuantity,
  totalPriceSum,
}) => {
  const discount = useSelector(selectPromoCodeDiscount);
  const isPromoValid = useSelector(selectPromoValid);
  const totalSum = isPromoValid ? discountPrice(priceSum, discount) : priceSum;
  const dispatch = useDispatch();
  const promoCode = useSelector(selectPromoCode);
  useEffect(() => {
    if (isPromoValid && promoCode !== "") {
      dispatch(addShopCartTotalPriceSum(Math.ceil(totalSum)));
    } else {
      dispatch(addShopCartTotalPriceSum(priceSum));
    }
  }, [priceSum, dispatch, isPromoValid, totalSum]);

  return (
    <>
      <StyledYourOrderWrapper>
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
              {totalPriceSum}
              &nbsp;грн
            </span>
          </StyledOrderText>
        </StyledOrderPriceTextWrapper>
      </StyledYourOrderWrapper>
    </>
  );
};
