import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";

import { useLocation } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import { Title } from "components/Typography/Typography.styled";
import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
} from "./ShopCart.styled";
import { ShopCard } from "./ShopCard/ShopCard";
import { Formik } from "formik";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";

export const ShopCartPayment = props => {
  const location = useLocation();
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
              </form>
            </Formik>
            <h3>Адреса доставки</h3>
            <p>Відділення №2: вул. Бережанська, 9 (Оболонь Лугова)</p>
            <p>м. Київ</p>
            <p>+380 96 452 31 45</p>
            <h3>Умови доставки</h3>
            <p>09.03 - 10.03</p>
            <p>Доставка на відділення «Нова пошта»</p>
            <p>Безкоштовно</p>
            <h3>Оплата та підтвердження замовлення</h3>
            <p>Вибери зручний спосіб оплати</p>
            <label>
              <input type="checkbox" />
              Оплатити карткою онлайн
            </label>
            aбо
            <label>
              <input type="checkbox" />
              Обрати збережену картку
            </label>
            <Formik>
              <form>
                <CustomInput
                  type="text"
                  label="Номер картки"
                  name="cardNumber"
                />
                <CustomInput type="text" label="Термін дії" name="validity" />
                <CustomInput type="text" label="CVV" name="cardCVV" />
              </form>
            </Formik>
            <StyledShopCartButton
              text={"Сплатити"}
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
