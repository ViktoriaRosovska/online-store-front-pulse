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

import { formatPhoneNumber } from "components/form/formHelpers/formatPhoneNumber";

import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";

const checkPhone = number => {
  console.log("number", number);
  if (number == "0000000000" || number == "") {
    return "";
  }
  return formatPhoneNumber(number);
};

export const DeliveryPersonalDetails = ({ setFieldValue, values }) => {
  const dispatch = useDispatch();

  const { firstName, lastName, phone, email } = useSelector(selectUserShopCart);
  console.log("phone", phone);

  useEffect(() => {
    if (firstName) setFieldValue("firstName", firstName);
    if (lastName) setFieldValue("lastName", lastName);
    if (phone) setFieldValue("phone", phone);
    if (email) setFieldValue("email", email);
  }, []);

  console.log(values);
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
          // mask={[
          //   "+",
          //   "3",
          //   "8",
          //   "(",
          //   "0",
          //   /[0-9]/,
          //   /[0-9]/,
          //   ")",
          //   /[0-9]/,
          //   /[0-9]/,
          //   /[0-9]/,
          //   "-",
          //   /[0-9]/,
          //   /[0-9]/,
          //   "-",
          //   /[0-9]/,
          //   /[0-9]/,
          // ]}
          onChange={async e => {
            dispatch(
              addShopCartPhone(
                // e.target.value.replace(/[^+-()0-9]]/gi, "").trim()
                e.target.value.replace(/[^()+-\d][^+()-]|_/g, "").trim()
              )
            );

            await setFieldValue(
              "phone",
              formatPhoneNumber(
                // e.target.value.replace(/[^+-()0-9]]/gi, "").trim()
                e.target.value.replace(/[^\d][^\+()-]|_/g, "").trim()
              )
            );
          }}
          value={phone}
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
