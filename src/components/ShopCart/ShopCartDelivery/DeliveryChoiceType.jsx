import { deliveryPrice } from "../../../utils/deliveryPrice";
import {
  StyledChoiceBtnWrapper,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
} from "./ShopCartDelivery.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { addDeliveryType } from "../../../redux/user/userShopCart/userShopCartSlice";
import { StyledChoiceBtnParagraphWrapper } from "../ShopCart/ShopCart.styled";
import { DELIVERY } from "../../../utils/DELIVERY";

export const DeliveryChoiceType = () => {
  const { priceSum, deliveryType } = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  return (
    <StyledChoiceBtnWrapper>
      <StyledChoiceDeliveryBtn
        type="button"
        $isSelectedBtn={deliveryType === DELIVERY.department}
        onClick={() => dispatch(addDeliveryType(DELIVERY.department))}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.department}
          >
            Доставка на відділення “Нова пошта”
          </StyledChoiseVariant>
          <p>{deliveryPrice(priceSum)}</p>
        </StyledChoiceBtnParagraphWrapper>
        <p>Безкоштовна доставка від 4000 грн</p>
      </StyledChoiceDeliveryBtn>
      <StyledChoiceDeliveryBtn
        $isSelectedBtn={deliveryType === DELIVERY.courier}
        type="button"
        onClick={() => {
          dispatch(addDeliveryType(DELIVERY.courier));
        }}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.courier}
          >
            Кур’єрська доставка
          </StyledChoiseVariant>
          <p>{deliveryPrice(priceSum)}</p>
        </StyledChoiceBtnParagraphWrapper>
        <p>Безкоштовна доставка від 4000 грн</p>
      </StyledChoiceDeliveryBtn>
      <StyledChoiceDeliveryBtn
        $isSelectedBtn={deliveryType === DELIVERY.poshtomat}
        type="button"
        onClick={() => dispatch(addDeliveryType(DELIVERY.poshtomat))}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.poshtomat}
          >
            Доставка в поштомат “Нова пошта”
          </StyledChoiseVariant>
          <p>{deliveryPrice(priceSum)}</p>
        </StyledChoiceBtnParagraphWrapper>

        <p>Безкоштовна доставка від 4000 грн</p>
      </StyledChoiceDeliveryBtn>
    </StyledChoiceBtnWrapper>
  );
};
