import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";

import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
// import { ReactComponent as CloseBtnSmall } from "../../assets/svg/closeBtnSmall.svg";
import {
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
  StyledPageWrapper,
  StyledPromocodeCheckWrapper,
  StyledPromocodeWrapper,
} from "./ShopCart.styled";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
// import { FiMinus, FiPlus } from "react-icons/fi";
import { ROUTES } from "../../utils/routes";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { Formik } from "formik";
import { ShopCard } from "./ShopCard/ShopCard";
import { useLazyCheckPromoCodeQuery } from "../../redux/products/productsApi";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import { ReactComponent as CheckedSvg } from "../../assets/svg/done.svg";
import {
  PromoExpired,
  PromoInvalid,
  PromoValid,
  setPromoCode,
  setPromoStatus,
} from "../../redux/promoCode/promoCodeSlice";
import {
  selectPromoCode,
  selectPromoExpired,
  selectPromoInvalid,
  selectPromoValid,
} from "../../redux/promoCode/promoCodeSelector";
export const ShopCart = props => {
  const items = useSelector(selectUserShopCart);
  // console.log(items);
  let location = useLocation();
  const dispatch = useDispatch();

  const normalize_count_form = (number, words_arr) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
      // const tenth = Math.floor((number / 10) % 10);
      // if (tenth === 1) return words_arr[2];

      // const ones = number % 10;
      // switch (ones) {
      //   case 0:
      //     return words_arr[2];
      //   case 1:
      //     return words_arr[0];

      //   case 2:
      //   case 3:
      //   case 4:
      //     return words_arr[1];

      //   case 5:
      //   case 6:
      //   case 7:
      //   case 8:
      //   case 9:
      //     return words_arr[2];
      // }
      let options = [2, 0, 1, 1, 1, 2];
      return words_arr[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : options[number % 10 < 5 ? number % 10 : 5]
      ];
    }
    return words_arr[1];
  };

  // let totalQuantity = 0;
  // let totalPrice = 0;
  // for (const el of items) {
  //   totalQuantity += el.quantity;
  //   totalPrice += el.price * el.quantity;
  // }

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
      }
    },
  });

  const handleChangePromo = e => {
    // console.log(e.target.value);
    dispatch(setPromoCode(e.target.value));
    checkPromoCode(e.target.value);
  };

  const isPromoExpired = useSelector(selectPromoExpired);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoValid = useSelector(selectPromoValid);
  const promoCode = useSelector(selectPromoCode);

  return (
    <>
      <Title>{props.title}</Title>
      <StyledPageWrapper>
        {items && items.length > 0 ? (
          <>
            <ul>
              {items.map((el, idx) => {
                return (
                  <ShopCard
                    el={el}
                    key={el._id + "#" + idx}
                    showCloseBtn={true}
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

              <Formik>
                {() => (
                  <form>
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
                  </form>
                )}
              </Formik>

              <StyledShopCartButton
                text={"Оформити"}
                route={ROUTES.SHOPCARTDELIVERY}
                state={{ from: location }}
              />
            </StyledOrderWrapper>
          </>
        ) : (
          <StyledNotificationWrapper>
            У вашому кошику ще немає товарів
          </StyledNotificationWrapper>
        )}
      </StyledPageWrapper>
    </>
  );
};
