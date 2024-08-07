import {
  StyledCardForm,
  StyledPayButton,
} from "components/CustomRadioButton/CustomRadioButton.styled";
import CustomInput from "../formElements/CustomInput/CustomInput";
import {
  editCardDateInInput,
  editCardNumberInInput,
  formatDateCard,
} from "../formHelpers/formUserCardEdit";
import { Formik } from "formik";
import { validationUserCardShopCardSchema } from "../formHelpers/formValidation";
import { usePostOrdersMutation } from "../../../redux/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentCard } from "../../../redux/paymentCard/paymentCardSelector";
import { clearShopCart } from "../../../redux/user/userShopCart/userShopCartSlice";
import { clearPromoCode } from "../../../redux/promoCode/promoCodeSlice";
import { useNavigate } from "react-router-dom";
import { copyShopCart } from "../../../redux/user/userShopCart/userCopyShopCart";
import { ROUTES } from "../../../utils/routes";
import { selectUserShopCartState } from "../../../redux/user/userShopCart/userShopCartSelector";

export const ShopCartCardPaymentForm = ({ shop, showModal }) => {
  const selectedCard = useSelector(selectPaymentCard);
  const dispatch = useDispatch();
  console.log(shop);
  const navigate = useNavigate();
  const userShopCart = useSelector(selectUserShopCartState);
  const [postOrders] = usePostOrdersMutation();
  const initialValues = {
    cardNumber: editCardNumberInInput(selectedCard?.cardNumber) || "",
    cardDate: formatDateCard(selectedCard?.cardDate) || "",
    cardCVC: selectedCard?.cardCVC || "",
  };

  const onSubmit = (values, option) => {
    console.log(values, option);
    try {
      postOrders(shop);
      dispatch(copyShopCart(userShopCart));
      dispatch(clearShopCart());
      dispatch(clearPromoCode());
      showModal(true);
      navigate(`${ROUTES.SHOPCARTSUCCESSFUL}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      validationSchema={validationUserCardShopCardSchema}
      initialValues={initialValues}
      validateOnChange={true}
      onSubmit={onSubmit}
    >
      {formik => (
        <StyledCardForm>
          <CustomInput
            type="text"
            label="Номер картки&#42;"
            name="cardNumber"
            maxLength="19"
            placeholder="0000 0000 0000 0000"
            onChange={event => {
              const formattedValue = editCardNumberInInput(event.target.value);
              formik.setFieldValue("cardNumber", formattedValue);
            }}
            onKeyDown={event => {
              if (event.key === "Backspace" && event.type === "keydown") {
                event.preventDefault();
                const newValue = formik.values.cardNumber.slice(0, -1);
                formik.setFieldValue("cardNumber", newValue);
              }
            }}
          />
          <CustomInput
            label="Термін дії&#42;"
            name="cardDate"
            type="text"
            placeholder="MM/YY"
            onChange={event => {
              const formattedValue = editCardDateInInput(event.target.value);
              formik.setFieldValue("cardDate", formattedValue);
            }}
          />
          <CustomInput
            label="CVV&#42;"
            name="cardCVC"
            type="text"
            placeholder="CVV"
            maxLength="3"
          />
          <StyledPayButton type="submit">
            {"Сплатити" + " " + shop.priceSum + " грн."}
          </StyledPayButton>
        </StyledCardForm>
      )}
    </Formik>
  );
};
