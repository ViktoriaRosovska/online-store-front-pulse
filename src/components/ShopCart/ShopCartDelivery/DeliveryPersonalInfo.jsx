import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import {
  StyledDeliveryTitle,
  StyledNameWrapper,
} from "./ShopCartDelivery.styled";
import {
  addShopCartPhone,
  addShopCartfirstName,
  addShopCartlastName,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { useDispatch } from "react-redux";

export const DeliveryPersonalDetails = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledDeliveryTitle>Особисті дані</StyledDeliveryTitle>
      <StyledNameWrapper>
        <CustomInput
          type="text"
          label="Ім'я"
          placeholder="Ім'я"
          name="fistName"
          onChange={e => {
            dispatch(addShopCartfirstName(e.target.value));
          }}
        />
        <CustomInput
          type="text"
          label="Прізвище"
          placeholder="Прізвище"
          name="lastName"
          onChange={e => {
            dispatch(addShopCartlastName(e.target.value));
          }}
        />
        <CustomInput
          type="text"
          label="Номер телефону"
          placeholder="+380"
          name="phone"
          onChange={e => {
            dispatch(addShopCartPhone(e.target.value));
          }}
        />
        <CustomInput
          type="email"
          label="Email"
          placeholder="example@com.ua"
          name="email"
          onChange={e => {
            dispatch(addShopCartPhone(e.target.value));
          }}
        />
      </StyledNameWrapper>
    </>
  );
};
