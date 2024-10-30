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

// import { formatPhoneNumber } from "components/form/formHelpers/formatPhoneNumber";

const formatPhone = number => {
  // console.log("number", number);
  // if (number == "0000000000" || number == "") {
  //   return "";
  // }

  const cc = number.substr(0, 3); // +38
  const ac = number.substr(3, 3); // 053
  const n1 = number.substr(6, 3); // 123
  const n2 = number.substr(9, 2); // 45
  const n3 = number.substr(11, 2); // 67

  let formatted = cc;
  if (cc.length === 3) {
    if (ac.length > 0) formatted += "(" + ac;
    if (ac.length === 3) {
      if (n1.length > 0) formatted += ")" + n1;
      if (n1.length === 3) {
        if (n2.length > 0) formatted += "-" + n2;
        if (n2.length === 2 && n3.length > 0) formatted += "-" + n3;
      }
    }
  }

  return formatted;
  //return formatPhoneNumber(number);
};

export const DeliveryPersonalDetails = ({ setFieldValue, values }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, phone, email } = values;
  // console.log("phone", phone);

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
