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
import { useDispatch } from "react-redux";
import { formatPhone } from "../../../utils/formatPhone";

export const DeliveryPersonalDetails = ({ setFieldValue, values }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, phone, email } = values;

  return (
    <>
      <StyledDeliveryTitle>Особисті дані отримувача</StyledDeliveryTitle>
      <StyledNameWrapper>
        <CustomInput
          type="text"
          label="Прізвище&#42;"
          placeholder="Прізвище"
          name="lastName"
          onChange={async e => {
            dispatch(addShopCartLastName(e.target.value.trim()));
            await setFieldValue("lastName", e.target.value.trim());
          }}
          value={lastName}
        />
        <CustomInput
          type="text"
          label="Ім'я&#42;"
          placeholder="Ім'я"
          name="firstName"
          onChange={async e => {
            dispatch(addShopCartFirstName(e.target.value.trim()));
            await setFieldValue("firstName", e.target.value.trim());
          }}
          value={firstName}
        />

        <CustomInput
          type="text"
          label="Номер телефону&#42;"
          placeholder="+38(000)000-00-00"
          name="phone"
          onChange={async e => {
            let raw = e.target.value
              .replace(/[^\d]/g, "")
              .replace(/^380?|^0+/g, "")
              .trim();
            if (raw !== "") raw = "+380" + raw.substr(0, 12);

            dispatch(addShopCartPhone(raw));
            await setFieldValue("phone", raw);
          }}
          value={formatPhone(phone)}
        />
        <CustomInput
          type="email"
          label="Email&#42;"
          placeholder="example@com.ua"
          name="email"
          onChange={async e => {
            dispatch(addShopCartEmail(e.target.value));
            await setFieldValue("email", e.target.value);
          }}
          value={email}
        />
      </StyledNameWrapper>
    </>
  );
};
