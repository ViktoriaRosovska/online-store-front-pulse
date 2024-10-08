import { deliveryPrice } from "../../../utils/deliveryPrice";
import {
  StyledChoiceBtnWrapper,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
  StyledDeliveryPriceType,
  StyledDeliveryText,
} from "./ShopCartDelivery.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { addDeliveryType } from "../../../redux/user/userShopCart/userShopCartSlice";
import { StyledChoiceBtnParagraphWrapper } from "../ShopCart/ShopCart.styled";
import { DELIVERY } from "../../../utils/DELIVERY";

export const DeliveryChoiceType = ({ setFieldValue }) => {
  const { priceSum, deliveryType } = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  return (
    <StyledChoiceBtnWrapper>
      <StyledChoiceDeliveryBtn
        type="button"
        $isSelectedBtn={deliveryType === DELIVERY.department}
        onClick={() => {
          dispatch(addDeliveryType(DELIVERY.department));
          setFieldValue("address.deliveryType", DELIVERY.department);
        }}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.department}
          >
            Доставка на відділення “Нова пошта”
          </StyledChoiseVariant>
          <StyledDeliveryPriceType
            $isSelectedBtn={deliveryType === DELIVERY.department}
          >
            {deliveryPrice(priceSum)}
          </StyledDeliveryPriceType>
        </StyledChoiceBtnParagraphWrapper>
        <StyledDeliveryText>
          Безкоштовна доставка від 4000 грн
        </StyledDeliveryText>
      </StyledChoiceDeliveryBtn>
      <StyledChoiceDeliveryBtn
        $isSelectedBtn={deliveryType === DELIVERY.courier}
        type="button"
        onClick={() => {
          dispatch(addDeliveryType(DELIVERY.courier));
          setFieldValue("address.deliveryType", DELIVERY.courier);
        }}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.courier}
          >
            Кур’єрська доставка
          </StyledChoiseVariant>
          <StyledDeliveryPriceType
            $isSelectedBtn={deliveryType === DELIVERY.courier}
          >
            {deliveryPrice(priceSum)}
          </StyledDeliveryPriceType>
        </StyledChoiceBtnParagraphWrapper>
        <StyledDeliveryText>
          Безкоштовна доставка від 4000 грн
        </StyledDeliveryText>
      </StyledChoiceDeliveryBtn>
      <StyledChoiceDeliveryBtn
        $isSelectedBtn={deliveryType === DELIVERY.poshtomat}
        type="button"
        onClick={() => {
          dispatch(addDeliveryType(DELIVERY.poshtomat));
          setFieldValue("address.deliveryType", DELIVERY.poshtomat);
        }}
      >
        <StyledChoiceBtnParagraphWrapper>
          <StyledChoiseVariant
            $isSelectedBtn={deliveryType === DELIVERY.poshtomat}
          >
            Доставка в поштомат “Нова пошта”
          </StyledChoiseVariant>
          <StyledDeliveryPriceType
            $isSelectedBtn={deliveryType === DELIVERY.poshtomat}
          >
            {deliveryPrice(priceSum)}
          </StyledDeliveryPriceType>
        </StyledChoiceBtnParagraphWrapper>

        <StyledDeliveryText>
          Безкоштовна доставка від 4000 грн
        </StyledDeliveryText>
      </StyledChoiceDeliveryBtn>
    </StyledChoiceBtnWrapper>
  );
};
