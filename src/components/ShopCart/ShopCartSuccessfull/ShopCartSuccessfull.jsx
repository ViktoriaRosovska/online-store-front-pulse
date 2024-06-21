import { useSelector } from "react-redux";
import { Title } from "../../../components/Typography/Typography.styled";
import {
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
} from "../ShopCart/ShopCart.styled";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { StyledPaymentPropsWrapper } from "../ShopCartPayment/ShopCartPayment.styled";
import { normalize_count_form } from "../../../utils/normalize_count_form";
import { ShopCard } from "../ShopCard/ShopCard";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { deliveryPrice } from "../../../utils/deliveryPrice";
import {
  StyledInfoMessage,
  StyledInviteMessage,
  StyledOrderSuccessfullWrapper,
  StyledProductsListWrapper,
} from "./ShopCartSuccessfull.styled";

export const ShopCartSuccessfull = ({ title }) => {
  const {
    products,
    priceSum,
    countQuantity,
    city,
    // address,
    street,
    numberHouse,
    numberHoll,
    flat,
    lastName,
    firstName,
    phone,
    deliveryType,
    email,
  } = useSelector(selectUserShopCart);
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{title}</Title>
      {/* <StyledProductsListWrapper></StyledProductsListWrapper> */}
      {products && products.length > 0 && (
        <StyledOrderSuccessfullWrapper>
          <StyledProductsListWrapper>
            <div>
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
            </div>

            <ul>
              {products.map((el, idx) => {
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
          </StyledProductsListWrapper>

          <div>
            <StyledInviteMessage>
              Вітаю, {firstName}, дякую, що купуєте у нас!
            </StyledInviteMessage>
            <StyledInfoMessage>
              Ви отримаєте лист на email та СМС, коли ваше замовлення буде
              відправлене зі складу.
            </StyledInfoMessage>
            <div>
              <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
              <StyledPaymentPropsWrapper>
                <p>
                  {" "}
                  {city?.SettlementTypeDescription +
                    " " +
                    city?.Description +
                    " " +
                    city?.AreaDescription +
                    " " +
                    "обл."}{" "}
                </p>
                <p>
                  {street?.StreetsType +
                    " " +
                    street?.Description +
                    ", " +
                    "будинок " +
                    numberHouse +
                    ", " +
                    "під'їзд " +
                    numberHoll +
                    ", " +
                    "квартира " +
                    flat}
                </p>
                {/* <p>{city}</p> */}
                <p>{lastName + " " + firstName}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </StyledPaymentPropsWrapper>
            </div>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>
            {/* <p style={{ color: "red" }}>09.03 - 10.03</p> */}
            <StyledPaymentPropsWrapper>
              <p>{deliveryType}</p>
              <p>{deliveryPrice(priceSum)}</p>
            </StyledPaymentPropsWrapper>
          </div>
        </StyledOrderSuccessfullWrapper>
      )}
    </>
  );
};
