import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../utils/routes";
// import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
} from "./ShopCart.styled";
import { ShopCard } from "./ShopCard/ShopCard";

import { useGetCitiesMutation } from "../../redux/novaPoshta/novaPoshtaAPI";
import { useState } from "react";

import { CitySelect } from "./CitySelect";
import {
  StyledChoiceBtnWrapper,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
  StyledDeliveryForm,
  StyledDeliveryTitle,
} from "./ShopCartDelivery.styled";
import { useFetchCurrentUserQuery } from "../../redux/auth";

export const ShopCartDelivery = props => {
  // let location = useLocation();
  const items = useSelector(selectUserShopCart);
  const [selectSearch, setSelectSearch] = useState("");
  const [isSelectedBtn, setIsSelectedBtn] = useState(
    "Доставка на відділення “Нова пошта”"
  );
  const [findCities, setFindCities] = useState([]);
  const [getCities, { data, isError, isLoading }] = useGetCitiesMutation();

  const userData = useFetchCurrentUserQuery();
  console.log(userData);

  if (data) {
    if (data.data !== findCities) {
      setFindCities(data.data);
    }

    //console.log(data.data);
  }

  const onSelectSearch = value => {
    //setSelectSearch(value);
    getCities(value);
  };

  const onSelectChange = value => {
    console.log("onSelectChange", value);
    setSelectSearch(value);

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
                name: "",
                city: "",
                phone: "",
                department: "",
                surname: "",
                code: "",
                policy: "",
              }}
            >
              {formik => (
                console.log(formik.values),
                (
                  <StyledDeliveryForm>
                    <CustomInput
                      placeholder="Ввести промокод"
                      type="text"
                      name="code"
                      label=""
                    />
                    <StyledDeliveryTitle>
                      Обери адресу доставки
                    </StyledDeliveryTitle>
                    <label htmlFor="city">Населений пункт</label>
                    <CitySelect
                      options={findCities}
                      onChange={e => {
                        onSelectChange(e);
                        formik.setFieldValue("city", e.label);
                      }}
                      onSearch={e => onSelectSearch(e)}
                      value={formik.values.city}
                      name="city"
                    />
                    <StyledChoiceBtnWrapper>
                      <StyledChoiceDeliveryBtn
                        type="button"
                        onClick={() =>
                          setIsSelectedBtn(
                            "Доставка на відділення “Нова пошта”"
                          )
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <StyledChoiseVariant
                            $isSelectedBtn={
                              isSelectedBtn ===
                              "Доставка на відділення “Нова пошта”"
                            }
                          >
                            Доставка на відділення “Нова пошта”
                          </StyledChoiseVariant>
                          <p>
                            {countPrice >= 4000
                              ? "Безкоштовно"
                              : "По тарифам перевізника"}
                          </p>
                        </div>
                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                      <StyledChoiceDeliveryBtn
                        type="button"
                        onClick={() => setIsSelectedBtn("Кур’єрська доставка")}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <StyledChoiseVariant
                            $isSelectedBtn={
                              isSelectedBtn === "Кур’єрська доставка"
                            }
                          >
                            Кур’єрська доставка
                          </StyledChoiseVariant>
                          <p>
                            {countPrice >= 4000
                              ? "Безкоштовно"
                              : "По тарифам перевізника"}
                          </p>
                        </div>
                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                      <StyledChoiceDeliveryBtn
                        type="button"
                        onClick={() =>
                          setIsSelectedBtn("Доставка в поштомат “Нова пошта”")
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <StyledChoiseVariant
                            $isSelectedBtn={
                              isSelectedBtn ===
                              "Доставка в поштомат “Нова пошта”"
                            }
                          >
                            Доставка в поштомат “Нова пошта”
                          </StyledChoiseVariant>
                          <p>
                            {countPrice >= 4000
                              ? "Безкоштовно"
                              : "По тарифам перевізника"}
                          </p>
                        </div>
                        <p>Безкоштовна доставка від 4000 грн</p>
                      </StyledChoiceDeliveryBtn>
                    </StyledChoiceBtnWrapper>
                    {isSelectedBtn ===
                      "Доставка на відділення “Нова пошта”" && (
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
                    {isSelectedBtn === "Кур’єрська доставка" && (
                      <>
                        <StyledDeliveryTitle>
                          Адреса доставки
                        </StyledDeliveryTitle>
                        <CustomInput
                          type="text"
                          label="Оберіть вулицю"
                          placeholder="Оберіть вулицю"
                          name="street"
                        />
                        <CustomInput
                          type="text"
                          label="Оберіть номер будинку"
                          placeholder="Номер будинку"
                          name="house"
                        />
                        <CustomInput
                          type="text"
                          label="Оберіть номер квартири"
                          placeholder="Номер квартири"
                          name="flat"
                        />
                        <label htmlFor="comments">
                          Коментарі для кур&apos;єра
                        </label>
                        <CustomInput
                          as="textarea"
                          name="comments"
                          // type="text"
                          placeholder="Напишіть коментар"
                        />
                      </>
                    )}
                    {isSelectedBtn === "Доставка в поштомат “Нова пошта”" && (
                      <>
                        <StyledDeliveryTitle>
                          Номер поштомату
                        </StyledDeliveryTitle>
                        <CustomInput
                          type="text"
                          label="Оберіть номер поштомату"
                          placeholder="Номер поштомату"
                          name="department"
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
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          required
                          name="policy"
                          onChange={formik.handleChange}
                          value={true}
                        />
                        Я приймаю Політику конфіденційності і Умови продажу
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="subscribe"
                          onChange={formik.handleChange}
                          value={true}
                        />
                        Я хочу отримувати інформацію про новинки, акції
                      </label>
                    </div>
                    <button type="submit">Форма</button>
                  </StyledDeliveryForm>
                )
              )}
            </Formik>

            <StyledShopCartButton
              text={"Продовжити оформлення"}
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
