import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import {
  StyledDeliveryTitle,
  StyledNameWrapper,
} from "./ShopCartDelivery.styled";
import {
  addShopCartEmail,
  addShopCartFirstName,
  addShopCartLastName,
  addShopCartPhone,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const DeliveryPersonalDetails = () => {
  const { firstName, lastName, email, phone } = useSelector(selectUserShopCart);
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
            dispatch(addShopCartFirstName(e.target.value));
          }}
          value={firstName}
        />
        <CustomInput
          type="text"
          label="Прізвище"
          placeholder="Прізвище"
          name="lastName"
          onChange={e => {
            dispatch(addShopCartLastName(e.target.value));
          }}
          value={lastName}
        />
        <CustomInput
          type="text"
          label="Номер телефону"
          placeholder="+380"
          name="phone"
          onChange={e => {
            dispatch(addShopCartPhone(e.target.value));
          }}
          value={phone}
        />
        <CustomInput
          type="email"
          label="Email"
          placeholder="example@com.ua"
          name="email"
          onChange={e => {
            dispatch(addShopCartEmail(e.target.value));
          }}
          value={email}
        />
      </StyledNameWrapper>
    </>
  );
};
