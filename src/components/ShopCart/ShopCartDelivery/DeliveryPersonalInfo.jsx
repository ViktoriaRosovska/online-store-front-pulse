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
import { useFetchCurrentUserQuery } from "../../../redux/auth";
import { useEffect } from "react";

export const DeliveryPersonalDetails = () => {
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { firstName, lastName, email, phone } = useSelector(selectUserShopCart);
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
          name="fistName"
          onChange={e => {
            dispatch(addShopCartFirstName(e.target.value));
          }}
          value={firstName}
        />
        <CustomInput
          type="text"
          label="Прізвище&#42;"
          placeholder="Прізвище"
          name="lastName"
          onChange={e => {
            dispatch(addShopCartLastName(e.target.value));
          }}
          value={lastName}
        />
        <CustomInput
          type="text"
          label="Номер телефону&#42;"
          placeholder="+380"
          name="phone"
          onChange={e => {
            dispatch(addShopCartPhone(e.target.value));
          }}
          value={phone}
        />
        <CustomInput
          type="email"
          label="Email&#42;"
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
