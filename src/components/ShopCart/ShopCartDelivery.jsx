import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import {
  StyledChoiceBtnParagraphWrapper,
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledPDVText,
  StyledPromocodeCheckWrapper,
  StyledPromocodeWrapper,
} from "./ShopCart.styled";
import { ShopCard } from "./ShopCard/ShopCard";

import {
  useGetCitiesMutation,
  useGetDepartmentsMutation,
} from "../../redux/novaPoshta/novaPoshtaAPI";
import { useState } from "react";

import { CitySelect } from "./CitySelect";
import {
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledChoiceBtnWrapper,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
  StyledDeliveryForm,
  StyledDeliveryOrderWrapper,
  StyledDeliveryTitle,
  StyledOrderDeliveryWrapper,
  StyledPromoCodeForm,
} from "./ShopCartDelivery.styled";
import { useFetchCurrentUserQuery } from "../../redux/auth";
import { useLazyCheckPromoCodeQuery } from "../../redux/products/productsApi";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

import { ReactComponent as CheckedSvg } from "../../assets/svg/done.svg";
import {
  selectPromoCode,
  selectPromoCodeDiscount,
  selectPromoExpired,
  selectPromoInvalid,
  selectPromoValid,
} from "../../redux/promoCode/promoCodeSelector";
import {
  PromoExpired,
  PromoInvalid,
  PromoValid,
  setPromoCode,
  setPromoCodeDiscount,
  setPromoStatus,
} from "../../redux/promoCode/promoCodeSlice";
import useMediaQuery from "../../hooks/useMediaQuery";
import { CheckboxItem } from "components/CheckboxList/CheckboxItem/ChechboxItem";

import { StyledConditionsLinks } from "components/Links/Links.styled";

const DELIVERY = {
  department: "Доставка на відділення “Нова пошта”",
  poshtomat: "Доставка в поштомат “Нова пошта”",
  courier: "Кур’єрська доставка",
};

export const ShopCartDelivery = props => {
  let location = useLocation();
  const items = useSelector(selectUserShopCart);
  console.log(items);
  const [selectCitySearch, setSelectCitySearch] = useState("");
  const [departments, setDepartments] = useState([]);

  const [isSelectedBtn, setIsSelectedBtn] = useState(
    "Доставка на відділення “Нова пошта”"
  );
  const [findCities, setFindCities] = useState([]);

  const [deliveryType, setDeliveryType] = useState(DELIVERY.department);

  const [getCities, { data, isError, isLoading }] = useGetCitiesMutation();
  const [
    getDepartments,
    {
      data: departmentData,
      isError: departmentIsError,
      isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  // getDepartments("8d5a980d-391c-11dd-90d9-001a92567626");
  console.log(departmentData);

  const userData = useFetchCurrentUserQuery();
  const dispatch = useDispatch();

  const handleChangePromo = e => {
    dispatch(setPromoCode(e.target.value));
    checkPromoCode(e.target.value);
  };

  if (data) {
    if (data.data !== findCities) {
      setFindCities(data.data);
    }

    //console.log(data.data);
  }

  if (departmentData) {
    if (departmentData.data !== departments) {
      console.log(departmentData);
      const departmentsList = [
        ...departmentData.data.filter(
          el => el.CategoryOfWarehouse === "Branch"
        ),
      ];
      console.log(departmentsList);
      setDepartments(departmentsList);
    }
  }
  console.log("departments", departments);

  const onSelectCitySearch = value => {
    //setSelectSearch(value);
    getCities(value);
  };

  const onSelectChange = value => {
    console.log("onSelectChange", value);
    setSelectCitySearch(value);
    if (selectCitySearch && selectCitySearch.Ref) {
      getDepartments(selectCitySearch?.Ref);
    }
    //getCities(value);
  };

  // setSelectSearch("Ірпінь");
  const normalize_count_form = (number, words_arr) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
      let options = [2, 0, 1, 1, 1, 2];
      return words_arr[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : options[number % 10 < 5 ? number % 10 : 5]
      ];
    }
    return words_arr[1];
  };

  let countQuantity = 0;
  const countPrice = items?.reduce((acc, el) => {
    if (el) {
      acc += el.price * el.quantity;
      countQuantity += el.quantity;
    }

    return acc;
  }, 0);

  const [checkPromoCode] = useLazyCheckPromoCodeQuery({
    selectFromResult: ({ data, error }) => {
      if (error) {
        if (error.status === 404) {
          dispatch(setPromoStatus(PromoInvalid));
        } else if (error.status === 400) {
          dispatch(setPromoStatus(PromoExpired));
        }
      } else if (data) {
        dispatch(setPromoStatus(PromoValid));
        console.log(data);
        dispatch(setPromoCodeDiscount(data.discount));
      }
    },
  });
  const discount = useSelector(selectPromoCodeDiscount);
  const isPromoExpired = useSelector(selectPromoExpired);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoValid = useSelector(selectPromoValid);
  const promoCode = useSelector(selectPromoCode);

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <>
      <Title>{props.title}</Title>
      {items && items.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              initialValues={{
                name: "",
                city: "",
                phone: "",
                department: "",
                surname: "",
                code: "",
                policy: false,
                isMailing: false,
              }}
            >
              {formik => (
                console.log(formik.values),
                (
                  <StyledDeliveryForm>
                    <>
                      <StyledDeliveryTitle>
                        Обери адресу доставки
                      </StyledDeliveryTitle>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <label htmlFor="city">Населений пункт</label>
                        <CitySelect
                          options={findCities}
                          placeholder={"Введіть населений пункт"}
                          onChange={e => {
                            onSelectChange(e);
                            formik.setFieldValue("city", e.label);
                          }}
                          onSearch={e => onSelectCitySearch(e)}
                          value={selectCitySearch}
                          name="city"
                        />
                      </div>

                      <StyledChoiceBtnWrapper>
                        <StyledChoiceDeliveryBtn
                          type="button"
                          $isSelectedBtn={isSelectedBtn === DELIVERY.department}
                          onClick={() => {
                            setIsSelectedBtn(DELIVERY.department);
                            setDeliveryType(DELIVERY.department);
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
                            <p>
                              {countPrice >= 4000
                                ? "Безкоштовно"
                                : "По тарифам перевізника"}
                            </p>
                          </StyledChoiceBtnParagraphWrapper>
                          <p>Безкоштовна доставка від 4000 грн</p>
                        </StyledChoiceDeliveryBtn>
                        <StyledChoiceDeliveryBtn
                          $isSelectedBtn={isSelectedBtn === DELIVERY.courier}
                          type="button"
                          onClick={() => setIsSelectedBtn(DELIVERY.courier)}
                        >
                          <StyledChoiceBtnParagraphWrapper>
                            <StyledChoiseVariant
                              $isSelectedBtn={
                                isSelectedBtn === DELIVERY.courier
                              }
                            >
                              Кур’єрська доставка
                            </StyledChoiseVariant>
                            <p>
                              {countPrice >= 4000
                                ? "Безкоштовно"
                                : "По тарифам перевізника"}
                            </p>
                          </StyledChoiceBtnParagraphWrapper>
                          <p>Безкоштовна доставка від 4000 грн</p>
                        </StyledChoiceDeliveryBtn>
                        <StyledChoiceDeliveryBtn
                          $isSelectedBtn={isSelectedBtn === DELIVERY.poshtomat}
                          type="button"
                          onClick={() => setIsSelectedBtn(DELIVERY.poshtomat)}
                        >
                          <StyledChoiceBtnParagraphWrapper>
                            <StyledChoiseVariant
                              $isSelectedBtn={
                                isSelectedBtn === DELIVERY.poshtomat
                              }
                            >
                              Доставка в поштомат “Нова пошта”
                            </StyledChoiseVariant>
                            <p>
                              {countPrice >= 4000
                                ? "Безкоштовно"
                                : "По тарифам перевізника"}
                            </p>
                          </StyledChoiceBtnParagraphWrapper>

                          <p>Безкоштовна доставка від 4000 грн</p>
                        </StyledChoiceDeliveryBtn>
                      </StyledChoiceBtnWrapper>
                      {isSelectedBtn === DELIVERY.department && (
                        <>
                          <StyledDeliveryTitle>
                            Адреса відділення
                          </StyledDeliveryTitle>
                          <CustomInput
                            type="text"
                            label="Оберіть номер відділення"
                            placeholder="Номер відділення"
                            name="department"
                          />
                        </>
                      )}
                      {isSelectedBtn === DELIVERY.courier && (
                        <>
                          <StyledDeliveryTitle>
                            Адреса доставки
                          </StyledDeliveryTitle>
                          <CustomInput
                            type="text"
                            label="Введіть вулицю"
                            placeholder="Вулиця"
                            name="street"
                          />
                          <CustomInput
                            type="text"
                            label="Введіть номер будинку"
                            placeholder="Номер будинку"
                            name="house"
                          />
                          <CustomInput
                            type="text"
                            label="Введіть номер під'їзду"
                            placeholder="Номер під'їзду"
                            name="numberHoll"
                          />
                          <CustomInput
                            type="text"
                            label="Введіть номер квартири"
                            placeholder="Номер квартири"
                            name="flat"
                          />

                          <CustomInput
                            as="textarea"
                            name="comments"
                            type="text"
                            $textarea
                            placeholder="Напишіть коментар"
                            label={"Коментарі для кур'єра"}
                          />
                        </>
                      )}
                      {isSelectedBtn === DELIVERY.poshtomat && (
                        <>
                          <StyledDeliveryTitle>
                            Номер поштомату
                          </StyledDeliveryTitle>
                          <CustomInput
                            type="text"
                            label="Оберіть номер поштомату"
                            placeholder="Номер поштомату"
                            name="poshtomat"
                          />
                        </>
                      )}
                      <StyledDeliveryTitle>Особисті дані</StyledDeliveryTitle>
                      <CustomInput
                        type="text"
                        label="Ім'я"
                        placeholder="Ім'я"
                        name="name"
                      />
                      <CustomInput
                        type="text"
                        label="Прізвище"
                        placeholder="Прізвище"
                        name="surname"
                      />
                      <CustomInput
                        type="text"
                        label="Номер телефону"
                        placeholder="+380"
                        name="phone"
                      />
                      <StyledCheckboxWrapper>
                        <StyledCheckboxLabel>
                          <CheckboxItem
                            // type="checkbox"
                            required
                            name="policy"
                            item=""
                            checked={formik.values.policy}
                            handleInputChange={e =>
                              formik.setFieldValue("policy", e.target.checked)
                            }

                            // checked={e => getChecked(e.target)}
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
                            handleInputChange={e =>
                              formik.setFieldValue(
                                "isMailing",
                                e.target.checked
                              )
                            }
                          />
                          Я хочу отримувати інформацію про новинки, акції
                        </StyledCheckboxLabel>
                      </StyledCheckboxWrapper>

                      {/* <button type="submit">Форма</button> */}
                    </>
                  </StyledDeliveryForm>
                )
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
                  <span>{countPrice}&nbsp;грн</span>
                </StyledOrderText>

                <StyledOrderText>
                  <div>
                    <p>Усього</p>
                    <StyledPDVText>Включно з ПДВ</StyledPDVText>
                  </div>
                  <span>
                    {isPromoValid
                      ? countPrice - (discount * countPrice) / 100
                      : countPrice}
                    &nbsp;грн
                  </span>
                </StyledOrderText>
              </StyledOrderPriceTextWrapper>
            </div>
            <Formik
              initialValues={{
                code: "",
              }}
            >
              <StyledPromoCodeForm>
                <StyledPromocodeWrapper>
                  <CustomInput
                    placeholder="Ввести промокод"
                    type="text"
                    name="code"
                    label=""
                    onChange={handleChangePromo}
                    value={promoCode}
                  />
                  {isPromoInvalid && <Error>Невірний промокод</Error>}
                  {isPromoExpired && <Error>Промокод вже недійсний</Error>}
                  {isPromoValid ? (
                    <StyledPromocodeCheckWrapper>
                      <CheckedSvg />
                    </StyledPromocodeCheckWrapper>
                  ) : null}
                </StyledPromocodeWrapper>
              </StyledPromoCodeForm>
            </Formik>
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
