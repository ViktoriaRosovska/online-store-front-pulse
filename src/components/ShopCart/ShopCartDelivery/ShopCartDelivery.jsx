import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
} from "../ShopCart/ShopCart.styled";
import { ShopCard } from "../ShopCard/ShopCard";

import {
  StyledDeliveryForm,
  StyledDeliveryOrderWrapper,
  StyledOrderDeliveryWrapper,
} from "../ShopCartDelivery/ShopCartDelivery.styled";

import {
  selectPromoCodeDiscount,
  selectPromoValid,
} from "../../../redux/promoCode/promoCodeSelector";

import useMediaQuery from "../../../hooks/useMediaQuery";

import { normalize_count_form } from "../../../utils/normalize_count_form";
import { discountPrice } from "../../../utils/discountPrice";
import { DELIVERY } from "../../../utils/DELIVERY";

import { PromoCode } from "components/PromoCode";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryCitySelect } from "./DeliveryCitySelect";
import { DeliveryChoiceType } from "./DeliveryChoiceType";
import { DepartmentDeliveryAddress } from "./DepartmentDeliveryAddress";
import { PoshtomatDeliveryAddress } from "./PoshtomatDeliveryAddress";
import { DeliveryPersonalDetails } from "./DeliveryPersonalInfo";
import { userShopCartValidationSchema } from "components/form/formHelpers/formValidation";
import { CourierDeliveryAddress } from "./CourierDeliveryAddress";
import { DeliveryCheckboxPolicy } from "./DeliveryCheckboxPolicy";

export const ShopCartDelivery = props => {
  let location = useLocation();
  const { products, priceSum, countQuantity, deliveryType } =
    useSelector(selectUserShopCart);

  const discount = useSelector(selectPromoCodeDiscount);

  const isPromoValid = useSelector(selectPromoValid);

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{props.title}</Title>
      {products && products.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              validationSchema={userShopCartValidationSchema}
              initialValues={{
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                street: "",
                numberHouse: "",
                numberHoll: "",
                comments: "",
                flat: "",
                condition: false,
                isMailing: false,
              }}
            >
              <StyledDeliveryForm>
                <>
                  <DeliveryCitySelect />
                  <DeliveryChoiceType />

                  {deliveryType === DELIVERY.department && (
                    <DepartmentDeliveryAddress />
                  )}
                  {deliveryType === DELIVERY.courier && (
                    <>
                      <CourierDeliveryAddress />
                    </>
                  )}
                  {deliveryType === DELIVERY.poshtomat && (
                    <PoshtomatDeliveryAddress />
                  )}

                  <DeliveryPersonalDetails />

                  <DeliveryCheckboxPolicy />
                  {/* <button type="submit">Форма</button> */}
                </>
              </StyledDeliveryForm>
            </Formik>

            <StyledShopCartButton
              text={"Продовжити оформлення"}
              route={ROUTES.SHOPCARTPAYMENT}
              state={{ from: location }}
            />
          </div>

          <StyledDeliveryOrderWrapper>
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
                  <span>
                    {isPromoValid
                      ? discountPrice(priceSum, discount)
                      : priceSum}
                    &nbsp;грн
                  </span>
                </StyledOrderText>
              </StyledOrderPriceTextWrapper>
            </div>

            <PromoCode />
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
          </StyledDeliveryOrderWrapper>
        </StyledOrderDeliveryWrapper>
      ) : (
        <StyledNotificationWrapper>
          У вашому кошику ще немає товарів
        </StyledNotificationWrapper>
      )}
    </>
  );
};
