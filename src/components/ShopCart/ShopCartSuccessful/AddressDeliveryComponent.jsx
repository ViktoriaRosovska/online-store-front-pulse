import { useSelector } from "react-redux";
import { StyledOrderTitle } from "../ShopCart/ShopCart.styled";
import { StyledPaymentPropsWrapper } from "../ShopCartPayment/ShopCartPayment.styled";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DELIVERY } from "../../../utils/DELIVERY";
import { DeliveryCourierAddress } from "./DeliveryCourierAddress";

export const AddressDeliveryComponent = () => {
  const {
    city,
    addressDepartment,
    addressPoshtomat,
    lastName,
    firstName,
    phone,
    deliveryType,
    email,
  } = useSelector(selectUserShopCart);
  return (
    <>
      <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
      <StyledPaymentPropsWrapper>
        <p>
          {city?.SettlementTypeDescription +
            " " +
            city?.Description +
            " " +
            city?.AreaDescription +
            " " +
            "обл."}
        </p>
        {deliveryType === DELIVERY.department && (
          <p>{addressDepartment.Description}</p>
        )}
        {deliveryType === DELIVERY.poshtomat && (
          <p>{addressPoshtomat.Description}</p>
        )}
        {deliveryType === DELIVERY.courier && <DeliveryCourierAddress />}

        <p>{lastName + " " + firstName}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </StyledPaymentPropsWrapper>
    </>
  );
};
