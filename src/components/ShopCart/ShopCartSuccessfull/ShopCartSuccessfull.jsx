import { useSelector } from "react-redux";
import { Title } from "../../../components/Typography/Typography.styled";
import {
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
} from "../ShopCart/ShopCart.styled";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { StyledOrderPaymentWrapper } from "../ShopCartPayment/ShopCartPayment.styled";
import { normalize_count_form } from "../../../utils/normalize_count_form";
import { ShopCard } from "../ShopCard/ShopCard";
import useMediaQuery from "../../../hooks/useMediaQuery";

export const ShopCartSuccessfull = ({ title }) => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const shopCart = useSelector(selectUserShopCart);
  const items = useSelector(selectUserShopCart).products;
  const priceSum = shopCart?.priceSum;
  const countQuantity = shopCart?.countQuantity;
  return (
    <>
      <Title>{title}</Title>

      {items && items.length > 0 && (
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
          </div>
          <div>
            <p>Вітаю, {shopCart.name}, дякую, що купуєте у нас!</p>
            <p>
              Ви отримаєте лист на email та СМС, коли ваше замовлення буде
              відправлене зі складу.
            </p>
            <div>
              <StyledOrderTitle>Адреса доставки</StyledOrderTitle>
              <div>
                <p>{shopCart.address}</p>
                <p>{shopCart.city}</p>
                <p>{shopCart.surname + " " + shopCart.name}</p>
                <p>{shopCart.phone}</p>
              </div>
            </div>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>
            <p style={{ color: "red" }}>09.03 - 10.03</p>
            <p>{shopCart.deliveryType}</p>
            <p style={{ color: "red" }}>Безкоштовно</p>
          </div>
        </StyledOrderPaymentWrapper>
      )}
    </>
  );
};
