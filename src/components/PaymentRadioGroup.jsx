import { useEffect, useState } from "react";

import { CustomRadioButton } from "./CustomRadioButton/CustomRadioButton";
import { Formik } from "formik";
import CustomInput from "./form/formElements/CustomInput/CustomInput";
import { ReactComponent as Visa } from "../assets/svg/visa.svg";
import { ReactComponent as Mastercard } from "../assets/svg/master.svg";
import { ReactComponent as ApplePay } from "../assets/svg/applePay.svg";
import { ReactComponent as GooglePay } from "../assets/svg/googlePay.svg";
import { ReactComponent as GooglePayBtn } from "../assets/svg/googlePay_btn.svg";
import {
  StyledCardForm,
  StyledCardIconWrapper,
  StyledOfflinePaymentText,
  StyledOfflinePaymentWrapper,
  StyledOnlinePaymentWrapper,
  StyledPayButton,
} from "./CustomRadioButton/CustomRadioButton.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentCard } from "../redux/paymentCard/paymentCardSelector";
import {
  editCardDateInInput,
  editCardNumberInInput,
  formatDateCard,
} from "./form/formHelpers/formUserCardEdit";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { Portal } from "./Modals/helpersForModal/modalPortal";
import CommonModal from "./Modals/CommonModal";
import { ModalSuccessfulPayment } from "./Modals/ModalSuccessfulPayment/ModalSuccessfulPayment";
import { addShopCartPaymentMethod } from "../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../redux/user/userShopCart/userShopCartSelector";
import { validationUserCardShopCardSchema } from "./form/formHelpers/formValidation";
import { usePostOrdersMutation } from "../redux/products/productsApi";

export const PaymentRadioGroup = () => {
  const [selected, setSelected] = useState("card");
  const [isVisible, setIsVisible] = useState(false);
  const selectedCard = useSelector(selectPaymentCard);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    paymentMethod,
    products,
    promocode,
    city,
    addressDepartment,
    addressPoshtomat,
    address,
    street,
    numberHouse,
    flat,
    numberHoll,
    comments,
    firstName,
    lastName,
    phone,
    isMailing,
    condition,
    deliveryType,
    priceSum,
    totalPriceSum,
    countQuantity,
    discount,
    email,
    orderDate,
    deliveryAddress,
  } = useSelector(selectUserShopCart);

  const newProducts = [
    ...products.map(el => ({
      productId: el._id,
      quantity: el.quantity,
      priceByOne: el.price,
      sizeId: el.sizeId,
    })),
  ];

  const shop = {
    priceSum: totalPriceSum,
    orderDate: new Date().toUTCString(),
    products: newProducts,
    deliveryAddress: address,
    paymentMethod: paymentMethod,
    discount: discount,
    promoCode: promocode,
    name: firstName + " " + lastName,
    email: email,
    isMailing: isMailing,
    phone: phone,
  };

  const [postOrders] = usePostOrdersMutation();
  console.log(paymentMethod);
  console.log(products);
  useEffect(() => {
    if (selected === "card" || selected === "online") {
      dispatch(addShopCartPaymentMethod("card"));
    } else {
      dispatch(addShopCartPaymentMethod("cash on delivery"));
    }
  }, [dispatch, selected]);

  const initialValues = {
    cardNumber: editCardNumberInInput(selectedCard?.cardNumber) || "",
    cardDate: formatDateCard(selectedCard?.cardDate) || "",
    cardCVC: selectedCard?.cardCVC || "",
  };
  const onSubmit = (values, option) => {
    console.log(values, option);
    try {
      postOrders(shop);
      setIsVisible(true);
    } catch (error) {
      console.log(error.message);
    }
    // postOrders(userFormData);
  };
  return (
    <>
      <CustomRadioButton
        value="online"
        selected={selected === "online"}
        text="Оплатити карткою онлайн"
        onChange={setSelected}
      >
        <StyledOnlinePaymentWrapper>
          <StyledCardIconWrapper>
            <button>
              <Visa />
            </button>
            <button>
              <Mastercard />
            </button>
            <button>
              <ApplePay />
            </button>
            <button>
              <GooglePay />
            </button>
          </StyledCardIconWrapper>

          <StyledPayButton onClick={() => setIsVisible(true)}>
            <GooglePayBtn />
          </StyledPayButton>
        </StyledOnlinePaymentWrapper>
      </CustomRadioButton>
      <CustomRadioButton
        value="card"
        selected={selected === "card"}
        onChange={setSelected}
        text="Оплатити банківською карткою"
      >
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
                label="Номер картки"
                name="cardNumber"
                maxLength="19"
                placeholder="0000 0000 0000 0000"
                onChange={event => {
                  const formattedValue = editCardNumberInInput(
                    event.target.value
                  );
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
                label="Термін дії"
                name="cardDate"
                type="text"
                placeholder="MM/YY"
                onChange={event => {
                  const formattedValue = editCardDateInInput(
                    event.target.value
                  );
                  formik.setFieldValue("cardDate", formattedValue);
                }}
              />
              <CustomInput
                label="CVV"
                name="cardCVC"
                type="text"
                placeholder="CVV"
                maxLength="3"
              />
              <StyledPayButton type="submit">
                {"Сплатити" + " " + totalPriceSum + " грн."}
              </StyledPayButton>
            </StyledCardForm>
          )}
        </Formik>
      </CustomRadioButton>
      <CustomRadioButton
        value="offline"
        selected={selected === "offline"}
        text="Оплатити при отриманні"
        onChange={setSelected}
      >
        {selected === "offline" && (
          <StyledOfflinePaymentWrapper>
            <StyledOfflinePaymentText>
              При отриманні замовлення у відділенні “Нова пошта“, а також при
              виборі кур&apos;єрської доставки “Нова пошта”, можна оплатити
              карткою або готівкою. Додаткова комісія за грошовий переказ: 20
              грн. + 2% від суми переказу.
            </StyledOfflinePaymentText>
            <StyledPayButton
              onClick={() => navigate(`${ROUTES.SHOPCARTSUCCESSFULL}`)}
            >
              Підтвердити замовлення
            </StyledPayButton>
          </StyledOfflinePaymentWrapper>
        )}
      </CustomRadioButton>
      <Portal isOpen={isVisible}>
        <CommonModal
          onClose={() => {}}
          isSizeModal={true}
          padding="20px 20px"
          showClose={false}
        >
          <ModalSuccessfulPayment />
        </CommonModal>
      </Portal>
    </>
  );
};
