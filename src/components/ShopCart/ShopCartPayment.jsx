import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";

import { useLocation } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import { Title } from "components/Typography/Typography.styled";
import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
} from "./ShopCart.styled";
import { ShopCard } from "./ShopCard/ShopCard";
import { Formik } from "formik";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { normalize_count_form } from "../../utils/normalize_count_form";
import useMediaQuery from "../../hooks/useMediaQuery";
import { PaymentRadioGroup } from "components/PaymentRadioGroup";
import { StyledDeliveryTitle } from "./ShopCartDelivery.styled";

export const ShopCartPayment = props => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const location = useLocation();
  const items = useSelector(selectUserShopCart).products;
  const shopCart = useSelector(selectUserShopCart);
  console.log(shopCart);

  let countQuantity = 0;
  const countPrice = items?.reduce((acc, el) => {
    if (el) {
      acc += el.price * el.quantity;
      countQuantity += el.quantity;
    }

    return acc;
  }, 0);
  return (
    <>
      <Title>{props.title}</Title>

      {items && items.length > 0 ? (
        <>
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
          <StyledOrderWrapper>
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
                <span>{countPrice}&nbsp;грн</span>
              </StyledOrderText>

              <StyledOrderText>
                <div>
                  <p>Усього</p>
                  <StyledPDVText>Включно з ПДВ</StyledPDVText>
                </div>
                <span>{countPrice}&nbsp;грн</span>
              </StyledOrderText>
            </StyledOrderPriceTextWrapper>
            <Formik
              initialValues={{
                code: "",
              }}
            >
              <form>
                <CustomInput
                  placeholder="Ввести промокод"
                  type="text"
                  name="code"
                  label=""
                />
              </form>
            </Formik>
            <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
            <p>{shopCart.address}</p>
            <p>{shopCart.city}</p>
            <p style={{ color: "red" }}>+380 96 452 31 45</p>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>
            <p style={{ color: "red" }}>09.03 - 10.03</p>
            <p>{shopCart.deliveryType}</p>
            <p style={{ color: "red" }}>Безкоштовно</p>
            <StyledDeliveryTitle>
              Оплата та підтвердження замовлення
            </StyledDeliveryTitle>
            <p>Вибери зручний спосіб оплати</p>
            <PaymentRadioGroup />

            <StyledShopCartButton
              text={"Сплатити"}
              route={ROUTES.SHOPCARTPAYMENT}
              state={{ from: location }}
            />
          </StyledOrderWrapper>
        </>
      ) : (
        <StyledNotificationWrapper>
          У вашому кошику ще немає товарів
        </StyledNotificationWrapper>
      )}
    </>
  );
};
