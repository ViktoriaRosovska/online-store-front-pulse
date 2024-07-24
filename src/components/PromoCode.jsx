import { Formik } from "formik";
import { StyledPromoCodeForm } from "./ShopCart/ShopCartDelivery/ShopCartDelivery.styled";
import {
  StyledPromocodeCheckWrapper,
  StyledPromocodeWrapper,
} from "./ShopCart/ShopCart/ShopCart.styled";
import CustomInput from "./form/formElements/CustomInput/CustomInput";
import { Error } from "./form/formElements/CustomInput/CustomInput.styled";
import { useDispatch, useSelector } from "react-redux";
import { useLazyCheckPromoCodeQuery } from "../redux/products/productsApi";
import {
  selectPromoCode,
  selectPromoCodeDiscount,
  selectPromoExpired,
  selectPromoInvalid,
  selectPromoValid,
} from "../redux/promoCode/promoCodeSelector";
import {
  PromoExpired,
  PromoInvalid,
  PromoValid,
  setPromoCode,
  setPromoCodeDiscount,
  setPromoStatus,
} from "../redux/promoCode/promoCodeSlice";
import { ReactComponent as CheckedSvg } from "../assets/svg/done.svg";
import {
  addShopCartDiscount,
  addShopCartPromoCode,
} from "../redux/user/userShopCart/userShopCartSlice";
import { useEffect } from "react";

export const PromoCode = () => {
  const dispatch = useDispatch();

  const [checkPromoCode, { data, error }] = useLazyCheckPromoCodeQuery();
  const isPromoExpired = useSelector(selectPromoExpired);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoValid = useSelector(selectPromoValid);
  const promoCode = useSelector(selectPromoCode);
  const discount = useSelector(selectPromoCodeDiscount);

  useEffect(() => {
    if (error) {
      if (error.status === 404) {
        dispatch(setPromoStatus(PromoInvalid));
      } else if (error.status === 400) {
        dispatch(setPromoStatus(PromoExpired));
      }
    } else if (data) {
      dispatch(setPromoStatus(PromoValid));
      dispatch(setPromoCodeDiscount(data.discount));
      dispatch(addShopCartPromoCode(promoCode));
      dispatch(addShopCartDiscount(discount));
    }
  }, [data, error, dispatch, promoCode, discount]);

  const handleChangePromo = promo => {
    dispatch(setPromoCode(promo));
    if (promo) checkPromoCode(promo);
  };

  return (
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
            onChange={e => handleChangePromo(e.target.value)}
            value={promoCode}
          />
          {isPromoInvalid && promoCode !== "" && (
            <Error>Невірний промокод</Error>
          )}
          {isPromoExpired && promoCode !== "" && (
            <Error>Промокод вже недійсний</Error>
          )}
          {isPromoValid ? (
            <StyledPromocodeCheckWrapper>
              <CheckedSvg />
            </StyledPromocodeCheckWrapper>
          ) : null}
        </StyledPromocodeWrapper>
      </StyledPromoCodeForm>
    </Formik>
  );
};
