// import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { StyledOrderTitle } from "../ShopCart/ShopCart.styled";

import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { PaymentRadioGroup } from "components/PaymentRadioGroup";
import {
  StyledDeliveryOrderWrapper,
  StyledDeliveryTitle,
} from "../ShopCartDelivery/ShopCartDelivery.styled";

import {
  StyledOrderPaymentWrapper,
  StyledPaymentPropsWrapper,
  StyledPaymentWrapper,
  StyledRadioGroupWrapper,
} from "./ShopCartPayment.styled";
import { deliveryPrice } from "../../../utils/deliveryPrice";
import { AddressDeliveryComponent } from "../ShopCartSuccessful/AddressDeliveryComponent";
import { YourOrderPriceComponent } from "../ShopCart/YourOrderPriceComponent/YourOrderPriceComponent";
import { ShopCartProductsList } from "../ShopCartProductsList";
import { PromoCode } from "components/PromoCode";
import { EmptyShopCart } from "../EmptyShopCart/EmptyShopCart";

export const ShopCartPayment = props => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const {
    products,
    priceSum,
    deliveryType,
    totalPriceSum,
    countQuantity,
    address,
    addressDepartment,
    addressPoshtomat,
    email,
    firstName,
    lastName,
    phone,
  } = useSelector(selectUserShopCart);

  return (
    <>
      <Title>{props.title}</Title>

      {products && products.length > 0 ? (
        <StyledOrderPaymentWrapper>
          <div>
            <StyledDeliveryOrderWrapper>
              <div style={{ marginBottom: "24px" }}>
                <ShopCartProductsList
                  products={products}
                  isDesktop={isDesktop}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <YourOrderPriceComponent
                    priceSum={priceSum}
                    totalPriceSum={totalPriceSum}
                    countQuantity={countQuantity}
                  />
                  <PromoCode />
                </div>
              </div>
            </StyledDeliveryOrderWrapper>

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
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>
            <StyledPaymentPropsWrapper>
              <p>{deliveryType}</p>
              <p>{deliveryPrice(priceSum)}</p>
            </StyledPaymentPropsWrapper>
          </div>

          <StyledPaymentWrapper>
            <StyledDeliveryTitle>
              Оплата та підтвердження замовлення
            </StyledDeliveryTitle>
            <StyledRadioGroupWrapper>
              <p>Вибери зручний спосіб оплати</p>
              <PaymentRadioGroup />
            </StyledRadioGroupWrapper>
          </StyledPaymentWrapper>
        </StyledOrderPaymentWrapper>
      ) : (
        <EmptyShopCart />
      )}
    </>
  );
};
