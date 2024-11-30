import { useSelector } from "react-redux";
import { Title } from "../../Typography/Typography.styled";
import { StyledOrderTitle } from "../ShopCart/ShopCart.styled";
import { selectCopyShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { StyledPaymentPropsWrapper } from "../ShopCartPayment/ShopCartPayment.styled";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { deliveryPrice } from "../../../utils/deliveryPrice";
import {
  StyledConditionWrapper,
  StyledInfoMessage,
  StyledInviteMessage,
  StyledOrderSuccessfulWrapper,
  StyledProductsListWrapper,
} from "./ShopCartSuccessful.styled";

import { AddressDeliveryComponent } from "./AddressDeliveryComponent";
import { YourOrderPriceComponent } from "../ShopCart/YourOrderPriceComponent/YourOrderPriceComponent";
import { ShopCartProductsList } from "../ShopCartProductsList";
import { DeliveryOrderDateInfo } from "./DeliveryOrderDateInfo/DeliveryOrderDateInfo";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

export const ShopCartSuccessful = ({ title }) => {
  const {
    products,
    priceSum,
    firstName,
    deliveryType,
    totalPriceSum,
    countQuantity,
    phone,
    address,
    addressDepartment,
    addressPoshtomat,
    email,
    lastName,
  } = useSelector(selectCopyShopCart);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {products && products.length > 0 ? (
        <>
          <Title>{title}</Title>
          <StyledOrderSuccessfulWrapper>
            <StyledProductsListWrapper>
              <div>
                <YourOrderPriceComponent
                  priceSum={priceSum}
                  totalPriceSum={totalPriceSum}
                  countQuantity={countQuantity}
                />
              </div>

              <ShopCartProductsList isDesktop={isDesktop} products={products} />
            </StyledProductsListWrapper>

            <StyledConditionWrapper>
              <StyledInviteMessage>
                Вітаю, {firstName}, дякую, що купуєте у нас!
              </StyledInviteMessage>

              <DeliveryOrderDateInfo
                products={products}
                deliveryType={deliveryType}
              />
              <StyledInfoMessage>
                Ви отримаєте лист на email та СМС, коли ваше замовлення буде
                відправлене зі складу.
              </StyledInfoMessage>
              <div>
                <AddressDeliveryComponent
                  email={email}
                  address={address}
                  addressDepartment={addressDepartment}
                  addressPoshtomat={addressPoshtomat}
                  lastName={lastName}
                  firstName={firstName}
                  phone={phone}
                  deliveryType={deliveryType}
                />
              </div>
              <StyledOrderTitle>Умови доставки</StyledOrderTitle>

              <StyledPaymentPropsWrapper>
                <p>{deliveryType}</p>
                <p>{deliveryPrice(priceSum)}</p>
              </StyledPaymentPropsWrapper>
            </StyledConditionWrapper>
          </StyledOrderSuccessfulWrapper>
        </>
      ) : (
        <Navigate to={ROUTES.HOME} />
      )}
    </>
  );
};
