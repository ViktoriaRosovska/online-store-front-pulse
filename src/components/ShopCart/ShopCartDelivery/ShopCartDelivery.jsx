import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { selectUserShopCartPriceSum, selectUserShopCartProducts, selectUserShopCartQuantity } from "../../../redux/user/userShopCart/userShopCartSelector";
import {
  StyledChoiceBtnParagraphWrapper,
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
  // StyledPromocodeCheckWrapper,
  // StyledPromocodeWrapper,
} from "../ShopCart/ShopCart.styled";
import { ShopCard } from "../ShopCard/ShopCard";

import {
  useGetDepartmentsMutation,
  useGetStreetsMutation,
} from "../../../redux/novaPoshta/novaPoshtaAPI";
import { useEffect, useState } from "react";

import {
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledChoiceBtnWrapper,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
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
import { deliveryPrice } from "../../../utils/deliveryPrice";
import { discountPrice } from "../../../utils/discountPrice";
import { DELIVERY } from "../../../utils/DELIVERY";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import { StreetSelect } from "../SelectComponents/StreetSelect";
import {
  addDeliveryType,
  addShopCartAddress,
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

export const ShopCartDelivery = props => {
  const dispatch = useDispatch();

  let location = useLocation();
  const { products, priceSum, countQuantity, city } =
    useSelector(selectUserShopCart);

  //const shopCard = useSelector(selectUserShopCartState);
  //console.log(shopCard);
  // const [selectCitySearch, setSelectCitySearch] = useState("");

  const [isSelectedBtn, setIsSelectedBtn] = useState(DELIVERY.department);

  const [
    getDepartments,
    {
      data: departmentData,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  const [getStreets, { data: streetsData }] = useGetStreetsMutation();
  // const userData = useFetchCurrentUserQuery();

  const departmentTypeFilter = (data, type) =>
    data?.data?.filter(el => type.includes(el.CategoryOfWarehouse));

  const onSelectDepartmentSearch = (ref, value) => {
    console.log("onSelectDepartmentSearch", ref, value);
    getDepartments(ref, value);
  };

  const onSelectStreetSearch = (ref, value) => {
    console.log("onSelectStreetSearch", ref, value);
    getStreets(ref, value);
  };

  const onSelectDepartmentsChange = value => {
    console.log("onSelectDepartmentsChange", value);
    dispatch(addShopCartAddress(value.label));
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
                address: "",
                street: "",
                house: "",
                numberHoll: "",
                comments: "",
                flat: "",
                surname: "",
                policy: false,
                isMailing: false,
                deliveryType: DELIVERY.department,
              }}
            >
              {formik => (
                <StyledDeliveryForm>
                  <>
                    <DeliveryCitySelect />

                    <StyledChoiceBtnWrapper>
                      <StyledChoiceDeliveryBtn
                        type="button"
                        $isSelectedBtn={isSelectedBtn === DELIVERY.department}
                        onClick={() => {
                          setIsSelectedBtn(DELIVERY.department);
                          dispatch(addDeliveryType(DELIVERY.department));
                        }}
                      >
                        <StyledChoiceBtnParagraphWrapper>
                          <StyledChoiseVariant
                            $isSelectedBtn={
                              isSelectedBtn === DELIVERY.department
                            }
                          >
                            Доставка на відділення “Нова пошта”
                          </StyledChoiseVariant>
                          <p>{deliveryPrice(priceSum)}</p>
                        </StyledChoiceBtnParagraphWrapper>
                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                      <StyledChoiceDeliveryBtn
                        $isSelectedBtn={isSelectedBtn === DELIVERY.courier}
                        type="button"
                        onClick={() => {
                          setIsSelectedBtn(DELIVERY.courier);
                          dispatch(addDeliveryType(DELIVERY.courier));
                        }}
                      >
                        <StyledChoiceBtnParagraphWrapper>
                          <StyledChoiseVariant
                            $isSelectedBtn={isSelectedBtn === DELIVERY.courier}
                          >
                            Кур’єрська доставка
                          </StyledChoiseVariant>
                          <p>{deliveryPrice(priceSum)}</p>
                        </StyledChoiceBtnParagraphWrapper>
                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                      <StyledChoiceDeliveryBtn
                        $isSelectedBtn={isSelectedBtn === DELIVERY.poshtomat}
                        type="button"
                        onClick={() => {
                          setIsSelectedBtn(DELIVERY.poshtomat);
                          dispatch(addDeliveryType(DELIVERY.poshtomat));
                        }}
                      >
                        <StyledChoiceBtnParagraphWrapper>
                          <StyledChoiseVariant
                            $isSelectedBtn={
                              isSelectedBtn === DELIVERY.poshtomat
                            }
                          >
                            Доставка в поштомат “Нова пошта”
                          </StyledChoiseVariant>
                          <p>{deliveryPrice(priceSum)}</p>
                        </StyledChoiceBtnParagraphWrapper>

                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                    </StyledChoiceBtnWrapper>
                    {isSelectedBtn === DELIVERY.department && (
                      <>
                        <StyledDeliveryTitle>
                          Адреса відділення
                        </StyledDeliveryTitle>

                        <StyledSelectWrapper>
                          <StyledSelectLabel htmlFor="address">
                            Оберіть номер відділення
                          </StyledSelectLabel>
                          <DepartmentSelect
                            options={departmentTypeFilter(departmentData, [
                              "Branch",
                              "Store",
                            ])}
                            placeholder="Номер відділення"
                            onChange={e => {
                              onSelectDepartmentsChange(e);
                              formik.setFieldValue("address", e.label);
                            }}
                            onSearch={e =>
                              onSelectDepartmentSearch(city.Ref, e)
                            }
                            name="address"
                          />
                        </StyledSelectWrapper>
                      </>
                    )}
                    {isSelectedBtn === DELIVERY.courier && (
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
                    {isSelectedBtn === DELIVERY.poshtomat && (
                      <>
                        <StyledSelectWrapper>
                          <StyledSelectLabel htmlFor="address">
                            Оберіть номер поштомату
                          </StyledSelectLabel>
                          <DepartmentSelect
                            options={departmentTypeFilter(departmentData, [
                              "Postomat",
                            ])}
                            placeholder="Номер поштомату"
                            onChange={e => {
                              onSelectDepartmentsChange(e);
                              formik.setFieldValue("address", e.label);
                            }}
                            onSearch={e =>
                              onSelectDepartmentSearch(city.Ref, e)
                            }
                            name="address"
                          />
                        </StyledSelectWrapper>
                      </>
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

            {/* <PromoCode onCheckPromo={() => onCheckPromo()} /> */}
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
