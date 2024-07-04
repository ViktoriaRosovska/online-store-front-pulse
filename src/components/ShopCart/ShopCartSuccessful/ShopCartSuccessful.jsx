import { useSelector } from "react-redux";
import { Title } from "../../Typography/Typography.styled";
import { StyledOrderTitle } from "../ShopCart/ShopCart.styled";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { StyledPaymentPropsWrapper } from "../ShopCartPayment/ShopCartPayment.styled";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { deliveryPrice } from "../../../utils/deliveryPrice";
import {
  StyledInfoMessage,
  StyledInviteMessage,
  StyledOrderSuccessfulWrapper,
  StyledProductsListWrapper,
} from "./ShopCartSuccessful.styled";

import { AddressDeliveryComponent } from "./AddressDeliveryComponent";
import { YourOrderPriceComponent } from "../ShopCart/YourOrderPriceComponent/YourOrderPriceComponent";
import { ShopCartProductsList } from "../ShopCartProductsList";
import { DeliveryOrderDateInfo } from "./DeliveryOrderDateInfo/DeliveryOrderDateInfo";

export const ShopCartSuccessful = ({ title }) => {
  const { products, priceSum, firstName, deliveryType } =
    useSelector(selectUserShopCart);
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{title}</Title>

      {products && products.length > 0 && (
        <StyledOrderSuccessfulWrapper>
          <StyledProductsListWrapper>
            <div>
              <YourOrderPriceComponent />
            </div>

            <ShopCartProductsList isDesktop={isDesktop} products={products} />
          </StyledProductsListWrapper>

          <div>
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
              <AddressDeliveryComponent />
            </div>
            <StyledOrderTitle>Умови доставки</StyledOrderTitle>

            <StyledPaymentPropsWrapper>
              <p>{deliveryType}</p>
              <p>{deliveryPrice(priceSum)}</p>
            </StyledPaymentPropsWrapper>
          </div>
        </StyledOrderSuccessfulWrapper>
      )}
    </>
  );
};
