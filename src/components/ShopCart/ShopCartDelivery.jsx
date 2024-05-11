import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../utils/routes";
import { useLocation } from "react-router-dom";
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

export const ShopCartDelivery = props => {
  let location = useLocation();
  const items = useSelector(selectUserShopCart);

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
              }}
            >
              <form>
                <CustomInput
                  placeholder="Ввести промокод"
                  type="text"
                  name="code"
                  label=""
                />
                <h3>Обери адресу доставки</h3>
                <CustomInput
                  type="text"
                  label="Місто"
                  placeholder="м.Київ"
                  name="city"
                />
                <h3>Адреса відділення</h3>
                <CustomInput
                  type="text"
                  label="Оберіть номер відділення"
                  placeholder="Номер відділення"
                  name="department"
                />
                <h3>Особисті дані</h3>
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
                    <input type="checkbox" />Я приймаю Політику конфіденцийності
                    і Умови продажу
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />Я хочу отримувати інформацію про
                    новинки, акції
                  </label>
                </div>
              </form>
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
