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
  useGetStreetsMutation,
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
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
// import { useFetchCurrentUserQuery } from "../../redux/auth";
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
import { normalize_count_form } from "../../utils/normalize_count_form";
import { deliveryPrice } from "../../utils/deliveryPrice";
import { discountPrice } from "../../utils/discountPrice";
import { DELIVERY } from "../../utils/DELIVERY";
import { DepartmentSelect } from "./DepartmentSelect";
import { StreetSelect } from "./StreetSelect";
import {
  addDeliveryType,
  addShopCartAddress,
  addShopCartCity,
  addShopCartPriceSum,
  addShopCartPromoCode,
  addShopCartStreet,
} from "../../redux/user/userShopCart/userShopCartSlice";

export const ShopCartDelivery = props => {
  let location = useLocation();
  const items = useSelector(selectUserShopCart).products;
  // console.log(items);
  const userShopCart = useSelector(selectUserShopCart);
  console.log(userShopCart);
  const [selectCitySearch, setSelectCitySearch] = useState("");
  // const [departments, setDepartments] = useState([]);

  const [isSelectedBtn, setIsSelectedBtn] = useState(DELIVERY.department);
  // const [findCities, setFindCities] = useState([]);
  const [selectDepartmentSearch, setSelectDepartmentSearch] = useState("");

  const [deliveryType, setDeliveryType] = useState(DELIVERY.department);

  const [
    getCities,
    {
      data,
      // isError, isLoading
    },
  ] = useGetCitiesMutation();
  const [
    getDepartments,
    {
      data: departmentData,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  const [getStreets, { data: streetsData }] = useGetStreetsMutation();
  console.log("streets", streetsData);
  // const userData = useFetchCurrentUserQuery();
  const dispatch = useDispatch();

  const handleChangePromo = e => {
    dispatch(setPromoCode(e.target.value));
    checkPromoCode(e.target.value);
    if (isPromoValid) {
      dispatch(addShopCartPromoCode(promoCode));
    } else {
      dispatch(addShopCartPromoCode(""));
    }
  };

  const departmentTypeFilter = (data, type) => {
    const departmentsList = data?.data?.filter(
      el => el.CategoryOfWarehouse === type
    );
    // console.log(departmentsList);
    return departmentsList;
  };

  // console.log("cities", data);
  const onSelectCitySearch = value => {
    getCities(value);
  };

  const onSelectDepartmentSearch = (ref, value) => {
    getDepartments(ref, value);
  };

  const onSelectChange = value => {
    console.log("onSelectChange", value);
    setSelectCitySearch(value);
    dispatch(addShopCartCity(value?.label));
    getDepartments(value?.Ref, "");
    getStreets(value?.Ref, "");
  };

  const onSelectDepartmentsChange = value => {
    // console.log("onSelectDepartmentChange", value);
    setSelectDepartmentSearch(value);
    dispatch(addShopCartAddress(value.label));
  };

  const onSelectStreetSearch = value => {
    dispatch(addShopCartStreet(value.label));
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
        // console.log(data);
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

  // const countPriceSum = price => {
  //   let priceSum = 0;
  //   if (PromoValid) {
  //     priceSum = discountPrice(price, discount);
  //   } else priceSum = price;
  //   dispatch(addShopCartPriceSum(priceSum));
  //   return priceSum;
  // };
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
                address: "",
                street: "",
                house: "",
                numberHoll: "",
                comments: "",
                flat: "",
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
                      <StyledSelectWrapper>
                        <StyledSelectLabel htmlFor="city">
                          Населений пункт
                        </StyledSelectLabel>
                        <CitySelect
                          options={data?.data}
                          placeholder={"Введіть населений пункт"}
                          onChange={e => {
                            onSelectChange(e);
                            formik.setFieldValue("city", e.label);
                          }}
                          onSearch={e => onSelectCitySearch(e)}
                          value={selectCitySearch}
                          name="city"
                        />
                      </StyledSelectWrapper>

                      <StyledChoiceBtnWrapper>
                        <StyledChoiceDeliveryBtn
                          type="button"
                          $isSelectedBtn={isSelectedBtn === DELIVERY.department}
                          onClick={() => {
                            setIsSelectedBtn(DELIVERY.department);
                            // setDeliveryType(DELIVERY.department);
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
                            <p>{deliveryPrice(countPrice)}</p>
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
                              $isSelectedBtn={
                                isSelectedBtn === DELIVERY.courier
                              }
                            >
                              Кур’єрська доставка
                            </StyledChoiseVariant>
                            <p>{deliveryPrice(countPrice)}</p>
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
                            <p>{deliveryPrice(countPrice)}</p>
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
                              options={departmentTypeFilter(
                                departmentData,
                                "Branch"
                              )}
                              placeholder="Номер відділення"
                              onChange={e => {
                                onSelectDepartmentsChange(e);
                                formik.setFieldValue("address", e.label);
                              }}
                              onSearch={e =>
                                onSelectDepartmentSearch(
                                  selectCitySearch?.Ref,
                                  e
                                )
                              }
                              value={selectDepartmentSearch}
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
                                onSelectChange(e);
                                formik.setFieldValue("street", e.label);
                              }}
                              onSearch={e => onSelectStreetSearch(e)}
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
                              options={departmentTypeFilter(
                                departmentData,
                                "Postomat"
                              )}
                              placeholder="Номер поштомату"
                              onChange={e => {
                                onSelectDepartmentsChange(e);
                                formik.setFieldValue("address", e.label);
                              }}
                              onSearch={e =>
                                onSelectDepartmentSearch(
                                  selectCitySearch?.Ref,
                                  e
                                )
                              }
                              value={selectDepartmentSearch}
                              name="address"
                            />
                          </StyledSelectWrapper>
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
                            required
                            name="policy"
                            item=""
                            checked={formik.values.policy}
                            handleInputChange={e =>
                              formik.setFieldValue("policy", e.target.checked)
                            }
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
                    {/* {countPriceSum(countPrice) + " грн"} */}
                    {isPromoValid
                      ? discountPrice(countPrice, discount)
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
