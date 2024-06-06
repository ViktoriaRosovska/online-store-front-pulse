// import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
} from "./ShopCart.styled";
import { ShopCard } from "./ShopCard/ShopCard";
import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { normalize_count_form } from "../../utils/normalize_count_form";
import useMediaQuery from "../../hooks/useMediaQuery";
import { PaymentRadioGroup } from "components/PaymentRadioGroup";
import { StyledDeliveryTitle } from "./ShopCartDelivery.styled";
import { PromoCode } from "components/PromoCode";
import {
  StyledOrderPaymentWrapper,
  StyledPaymentWrapper,
  StyledRadioGroupWrapper,
} from "./ShopCartPayment.styled";

export const ShopCartPayment = props => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  // const location = useLocation();
  const items = useSelector(selectUserShopCart).products;
  const shopCart = useSelector(selectUserShopCart);
  const priceSum = shopCart?.priceSum;
  const countQuantity = shopCart?.countQuantity;
  console.log(shopCart);

  return (
    <>
      <Title>{props.title}</Title>

      {items && items.length > 0 ? (
        <StyledOrderPaymentWrapper>
          <div>
            <ul>
              {items.map((el, idx) => {
                return (
                  <ShopCard
                    el={el}
                    key={el._id + "#" + idx}
                    showCloseBtn={false}
                    showDeliveryPrice={isDesktop}
                    device={isDesktop ? "desktop" : "mobile"}
                  />
                );
              })}
            </ul>

            <StyledOrderTitle>Твоє замовлення</StyledOrderTitle>
            <StyledOrderPriceTextWrapper>
              <StyledOrderText>
                <span>
                  {countQuantity}&nbsp;
                  {normalize_count_form(countQuantity, [
                    "товар",
                    "товари",
                    "товарів",
                  ])}
                </span>
                <span>{priceSum}&nbsp;грн</span>
              </StyledOrderText>

              <StyledOrderText>
                <div>
                  <p>Усього</p>
                  <StyledPDVText>Включно з ПДВ</StyledPDVText>
                </div>
                <span>{priceSum}&nbsp;грн</span>
              </StyledOrderText>
            </StyledOrderPriceTextWrapper>

            <PromoCode />
            <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
            <p>{shopCart.address}</p>
            <p>{shopCart.city}</p>
            <p style={{ color: "red" }}>+380 96 452 31 45</p>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>
            <p style={{ color: "red" }}>09.03 - 10.03</p>
            <p>{shopCart.deliveryType}</p>
            <p style={{ color: "red" }}>Безкоштовно</p>
          </div>

          <StyledPaymentWrapper>
            <StyledDeliveryTitle>
              Оплата та підтвердження замовлення
            </StyledDeliveryTitle>
            <StyledRadioGroupWrapper>
              <p>Вибери зручний спосіб оплати</p>
              <PaymentRadioGroup />
            </StyledRadioGroupWrapper>

            {/* <StyledShopCartButton
              text={"Сплатити"}
              route={ROUTES.SHOPCARTPAYMENT}
              state={{ from: location }}
            /> */}
          </StyledPaymentWrapper>
        </StyledOrderPaymentWrapper>
      ) : (
        <StyledNotificationWrapper>
          У вашому кошику ще немає товарів
        </StyledNotificationWrapper>
      )}
    </>
  );
};
