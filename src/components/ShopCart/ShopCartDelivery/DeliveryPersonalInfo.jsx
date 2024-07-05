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

import { useFetchCurrentUserQuery } from "../../../redux/auth";
import { useEffect } from "react";
import { formatPhoneNumber } from "components/form/formHelpers/formatPhoneNumber";

export const DeliveryPersonalDetails = ({ setFieldValue }) => {
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
    if (data?.user) {
      dispatch(addShopCartFirstName(data?.user?.firstName || ""));
      dispatch(addShopCartLastName(data?.user?.lastName || ""));
      dispatch(addShopCartPhone(data?.user?.phone || ""));
      dispatch(addShopCartEmail(data?.user?.email || ""));
    }
  }, [data, dispatch]);

  return (
    <>
      <StyledDeliveryTitle>Особисті дані</StyledDeliveryTitle>
      <StyledNameWrapper>
        <CustomInput
          type="text"
          label="Ім'я&#42;"
          placeholder="Ім'я"
          name="firstName"
          onChange={e => {
            dispatch(addShopCartFirstName(e.target.value));
            setFieldValue("firstName", e.target.value);
          }}
        />
        <CustomInput
          type="text"
          label="Прізвище&#42;"
          placeholder="Прізвище"
          name="lastName"
          onChange={e => {
            dispatch(addShopCartLastName(e.target.value));
            setFieldValue("lastName", e.target.value);
          }}
        />
        <CustomInput
          type="text"
          label="Номер телефону&#42;"
          placeholder="+38(000)000-00-00"
          name="phone"
          onChange={e => {
            dispatch(addShopCartPhone(e.target.value));
            setFieldValue("phone", formatPhoneNumber(e.target.value));
          }}
        />
        <CustomInput
          type="email"
          label="Email&#42;"
          placeholder="example@com.ua"
          name="email"
          onChange={e => {
            dispatch(addShopCartEmail(e.target.value));
            setFieldValue("email", e.target.value);
          }}
        />
      </StyledNameWrapper>
    </>
  );
};
