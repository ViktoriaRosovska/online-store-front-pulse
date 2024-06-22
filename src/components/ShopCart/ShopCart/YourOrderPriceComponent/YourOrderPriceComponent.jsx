import { normalize_count_form } from "../../../../utils/normalize_count_form";
import {
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
  StyledYourOrderWrapper,
} from "../ShopCart.styled";

import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../../../redux/user/userShopCart/userShopCartSelector";
import { selectPromoCodeDiscount } from "../../../../redux/promoCode/promoCodeSelector";

import { selectPromoValid } from "../../../../redux/promoCode/promoCodeSelector";
import { discountPrice } from "../../../../utils/discountPrice";

export const YourOrderPriceComponent = () => {
  const { priceSum, countQuantity } = useSelector(selectUserShopCart);

  const isPromoValid = useSelector(selectPromoValid);

  const discount = useSelector(selectPromoCodeDiscount);
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
              {isPromoValid ? discountPrice(priceSum, discount) : priceSum}
              &nbsp;грн
            </span>
          </StyledOrderText>
        </StyledOrderPriceTextWrapper>
      </StyledYourOrderWrapper>
    </>
  );
};
