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

import { AddressDeliveryComponent } from "./AddressDeliveryComponent";

export const ShopCartSuccessfull = ({ title }) => {
  const { products, priceSum, countQuantity, firstName, deliveryType } =
    useSelector(selectUserShopCart);
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{title}</Title>

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
              <AddressDeliveryComponent />
            </div>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>

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
