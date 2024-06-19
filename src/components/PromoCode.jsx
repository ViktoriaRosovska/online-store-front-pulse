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
import { useEffect, useState } from "react";
import { addShopCartPromoCode } from "../redux/user/userShopCart/userShopCartSlice";

export const PromoCode = () => {
  const [code, setCode] = useState("");

  console.log("code", code);
  const dispatch = useDispatch();

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

        dispatch(setPromoCodeDiscount(data.discount));
      }
    },
  });

  const isPromoExpired = useSelector(selectPromoExpired);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoValid = useSelector(selectPromoValid);
  const promoCode = useSelector(selectPromoCode);
  console.log("promocode", promoCode);

  const handleChangePromo = code => {
    dispatch(setPromoCode(code));
    checkPromoCode(code);
    setCode(code);
  };

  useEffect(() => {
    if (PromoValid) {
      dispatch(addShopCartPromoCode(code));
    }

    if (PromoInvalid || PromoExpired) {
      dispatch(addShopCartPromoCode(""));
    }
  }, [code, dispatch]);

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
  );
};
