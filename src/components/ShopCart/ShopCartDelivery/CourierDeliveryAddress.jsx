import CustomInput from "components/form/formElements/CustomInput/CustomInput";

import { StyledDeliveryTitle } from "./ShopCartDelivery.styled";

import { useDispatch, useSelector } from "react-redux";
import {
  addShopCartComments,
  addShopCartFlat,
  addShopCartNumberHoll,
  addShopCartNumberHouse,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryStreetSelect } from "./DeliveryStreetSelect";

export const CourierDeliveryAddress = () => {
  const dispatch = useDispatch();

  const { numberHouse, flat, numberHoll, comments } =
    useSelector(selectUserShopCart);

  const handleChange = (value, func) => {
    console.log(value);
    dispatch(func(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса доставки</StyledDeliveryTitle>

      <DeliveryStreetSelect />
      <CustomInput
        type="text"
        label="Вкажіть номер будинку"
        placeholder="Номер будинку"
        name="numberHouse"
        onChange={e => handleChange(e.target.value, addShopCartNumberHouse)}
        value={numberHouse}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер під'їзду"
        placeholder="Номер під'їзду"
        name="numberHoll"
        onChange={e => handleChange(e.target.value, addShopCartNumberHoll)}
        value={numberHoll}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер квартири"
        placeholder="Номер квартири"
        name="flat"
        onChange={e => handleChange(e.target.value, addShopCartFlat)}
        value={flat}
      />

      <CustomInput
        as="textarea"
        name="comments"
        type="text"
        $textarea
        placeholder="Напишіть коментар"
        label="Коментарі для кур'єра"
        onChange={e => handleChange(e.target.value, addShopCartComments)}
        value={comments}
      />
    </>
  );
};
