import { Formik } from "formik";
import { StyledPromoCodeForm } from "./ShopCart/ShopCartDelivery.styled";
import {
  StyledPromocodeCheckWrapper,
  StyledPromocodeWrapper,
} from "./ShopCart/ShopCart.styled";
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
import { addShopCartPromoCode } from "../redux/user/userShopCart/userShopCartSlice";
export const PromoCode = () => {
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
        // console.log(data);
        dispatch(setPromoCodeDiscount(data.discount));
      }
    },
  });
  const isPromoExpired = useSelector(selectPromoExpired);
  const isPromoInvalid = useSelector(selectPromoInvalid);
  const isPromoValid = useSelector(selectPromoValid);
  const promoCode = useSelector(selectPromoCode);

  const handleChangePromo = e => {
    dispatch(setPromoCode(e.target.value));
    checkPromoCode(e.target.value);
    if (isPromoValid) {
      dispatch(addShopCartPromoCode(promoCode));
    } else {
      dispatch(addShopCartPromoCode(""));
    }
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
  );
};
