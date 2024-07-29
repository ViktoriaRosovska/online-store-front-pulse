import { StyledOrderTitle } from "../ShopCart/ShopCart.styled";
import { StyledPaymentPropsWrapper } from "../ShopCartPayment/ShopCartPayment.styled";

import { DELIVERY } from "../../../utils/DELIVERY";
import { DeliveryCourierAddress } from "./DeliveryCourierAddress";

export const AddressDeliveryComponent = ({
  address,
  addressDepartment,
  addressPoshtomat,
  lastName,
  firstName,
  phone,
  deliveryType,
  email,
}) => {
  return (
    <>
      <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
      <StyledPaymentPropsWrapper>
        <p>{address?.city?.label}</p>
        {deliveryType === DELIVERY.department && (
          <p>{addressDepartment?.Description}</p>
        )}
        {deliveryType === DELIVERY.poshtomat && (
          <p>{addressPoshtomat?.Description}</p>
        )}
        {deliveryType === DELIVERY.courier && <DeliveryCourierAddress />}

        <p>{lastName + " " + firstName}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </StyledPaymentPropsWrapper>
    </>
  );
};
