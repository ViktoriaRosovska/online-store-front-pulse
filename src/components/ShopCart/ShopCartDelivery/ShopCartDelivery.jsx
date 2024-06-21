import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
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

import { useGetStreetsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";

import {
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledDeliveryForm,
  StyledDeliveryOrderWrapper,
  StyledDeliveryTitle,
  StyledNameWrapper,
  StyledOrderDeliveryWrapper,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "../ShopCartDelivery/ShopCartDelivery.styled";

import {
  selectPromoCodeDiscount,
  selectPromoValid,
} from "../../../redux/promoCode/promoCodeSelector";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { CheckboxItem } from "components/CheckboxList/CheckboxItem/ChechboxItem";

import { StyledConditionsLinks } from "components/Links/Links.styled";
import { normalize_count_form } from "../../../utils/normalize_count_form";
import { discountPrice } from "../../../utils/discountPrice";
import { DELIVERY } from "../../../utils/DELIVERY";
import { StreetSelect } from "../SelectComponents/StreetSelect";
import {
  addShopCartCondition,
  addShopCartIsMailing,
  addShopCartName,
  addShopCartPhone,
  addShopCartStreet,
  addShopCartSurname,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { PromoCode } from "components/PromoCode";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryCitySelect } from "./DeliveryCitySelect";
import { DeliveryChoiceType } from "./DeliveryChoiceType";
import { DepartmentDeliveryAddress } from "./DepartmentDeliveryAddress";
import { PoshtomatDeliveryAddress } from "./PoshtomatDeliveryAddress";

export const ShopCartDelivery = props => {
  const dispatch = useDispatch();

  let location = useLocation();
  const { products, priceSum, countQuantity, city, deliveryType } =
    useSelector(selectUserShopCart);

  const [getStreets, { data: streetsData }] = useGetStreetsMutation();

  const onSelectStreetSearch = (ref, value) => {
    console.log("onSelectStreetSearch", ref, value);
    getStreets(ref, value);
  };

  const onSelectStreetChange = value => {
    console.log("onSelectStreetChange", value);
    dispatch(addShopCartStreet(value.label));
  };

  const discount = useSelector(selectPromoCodeDiscount);

  const isPromoValid = useSelector(selectPromoValid);
  // const promoCode = useSelector(selectPromoCode);

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{props.title}</Title>
      {products && products.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                street: "",
                house: "",
                numberHoll: "",
                comments: "",
                flat: "",
                surname: "",
                policy: false,
                isMailing: false,
              }}
            >
              {formik => (
                <StyledDeliveryForm>
                  <>
                    <DeliveryCitySelect />
                    <DeliveryChoiceType />

                    {deliveryType === DELIVERY.department && (
                      <DepartmentDeliveryAddress />
                    )}
                    {deliveryType === DELIVERY.courier && (
                      <>
                        <StyledDeliveryTitle>
                          Адреса доставки
                        </StyledDeliveryTitle>

                        <StyledSelectWrapper>
                          <StyledSelectLabel htmlFor="street">
                            Вкажіть назву вулиці
                          </StyledSelectLabel>
                          <StreetSelect
                            options={streetsData?.data}
                            placeholder="Вулиця"
                            onChange={e => {
                              onSelectStreetChange(e);
                              formik.setFieldValue("street", e.label);
                              // dispatch(addShopCartStreet(e.label));
                            }}
                            onSearch={e => onSelectStreetSearch(city.Ref, e)}
                            // value={selectStreetSearch}
                            name="street"
                          />
                        </StyledSelectWrapper>

                        <CustomInput
                          type="text"
                          label="Вкажіть номер будинку"
                          placeholder="Номер будинку"
                          name="house"
                        />
                        <CustomInput
                          type="text"
                          label="Вкажіть номер під'їзду"
                          placeholder="Номер під'їзду"
                          name="numberHoll"
                        />
                        <CustomInput
                          type="text"
                          label="Вкажіть номер квартири"
                          placeholder="Номер квартири"
                          name="flat"
                        />

                        <CustomInput
                          as="textarea"
                          name="comments"
                          type="text"
                          $textarea
                          placeholder="Напишіть коментар"
                          label="Коментарі для кур'єра"
                        />
                      </>
                    )}
                    {deliveryType === DELIVERY.poshtomat && (
                      <PoshtomatDeliveryAddress />
                    )}
                    <StyledDeliveryTitle>Особисті дані</StyledDeliveryTitle>
                    <StyledNameWrapper>
                      <CustomInput
                        type="text"
                        label="Ім'я"
                        placeholder="Ім'я"
                        name="name"
                        onChange={e => {
                          dispatch(addShopCartName(e.target.value));
                          formik.setFieldValue("name", e.target.value);
                        }}
                      />
                      <CustomInput
                        type="text"
                        label="Прізвище"
                        placeholder="Прізвище"
                        name="surname"
                        onChange={e => {
                          dispatch(addShopCartSurname(e.target.value));
                          formik.setFieldValue("surname", e.target.value);
                        }}
                      />
                      <CustomInput
                        type="text"
                        label="Номер телефону"
                        placeholder="+380"
                        name="phone"
                        onChange={e => {
                          dispatch(addShopCartPhone(e.target.value));
                          formik.setFieldValue("phone", e.target.value);
                        }}
                      />
                    </StyledNameWrapper>

                    <StyledCheckboxWrapper>
                      <StyledCheckboxLabel>
                        <CheckboxItem
                          required
                          name="policy"
                          item=""
                          checked={formik.values.policy}
                          onChange={e => {
                            formik.setFieldValue("policy", e.target.checked);
                            dispatch(addShopCartCondition(e.target.checked));
                          }}
                        />
                        <div
                          style={{
                            height: "30px",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            Я приймаю&nbsp;
                            <StyledConditionsLinks to={ROUTES.POLICY}>
                              Політику конфіденційності
                            </StyledConditionsLinks>
                            &nbsp;
                          </span>
                          <span>
                            і&nbsp;
                            <StyledConditionsLinks to={ROUTES.CONDITIONS}>
                              Умови продажу
                            </StyledConditionsLinks>
                          </span>
                        </div>
                      </StyledCheckboxLabel>

                      <StyledCheckboxLabel>
                        <CheckboxItem
                          name="isMailing"
                          item=""
                          checked={formik.values.isMailing}
                          onChange={e => {
                            formik.setFieldValue("isMailing", e.target.checked);
                            dispatch(addShopCartIsMailing(e.target.checked));
                          }}
                        />
                        Я хочу отримувати інформацію про новинки, акції
                      </StyledCheckboxLabel>
                    </StyledCheckboxWrapper>

                    {/* <button type="submit">Форма</button> */}
                  </>
                </StyledDeliveryForm>
              )}
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
