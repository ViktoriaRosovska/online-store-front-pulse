import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import {
  StyledDeliveryTitle,
  StyledNameWrapper,
} from "./ShopCartDelivery.styled";
import {
  addShopCartEmail,
  addShopCartFirstName,
  addShopCartLastName,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { useDispatch } from "react-redux";
import { formatPhone } from "../../../utils/formatPhone";
import { StyledPhoneCode } from "../../../components/form/UserAccountForm/UserEditForm.styled";

export const DeliveryPersonalDetails = ({ setFieldValue, values }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, email } = values;

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
        <div style={{ position: "relative" }}>
          <CustomInput
            style={{ paddingLeft: "46px" }}
            type="text"
            label="Номер телефону&#42;"
            placeholder="(000)000-00-00"
            name="phone"
            onChange={async e => {
              let raw = e.target.value
                .replace(/[^\d]/g, "")
                .replace(/^38/, "")
                .trim();
              if (raw !== "") raw = "+38" + raw.substr(0, 10);

              await setFieldValue("phone", raw);
            }}
            value={formatPhone(values.phone)}
          />
          <StyledPhoneCode>+38</StyledPhoneCode>
        </div>
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
