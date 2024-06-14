import { useState } from "react";

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
  StyledOnlinePaymentWrapper,
  StyledPayButton,
  StypedOfflinePaymentWrapper,
} from "./CustomRadioButton/CustomRadioButton.styled";
import { useSelector } from "react-redux";
import { selectPaymentCard } from "../redux/paymentCard/paymentCardSelector";
import { editCardDateInInput } from "./form/formHelpers/formUserCardEdit";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

export const PaymentRadioGroup = () => {
  const [selected, setSelected] = useState("card");
  const selectedCard = useSelector(selectPaymentCard);
  const navigate = useNavigate();
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

          <StyledPayButton>
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
        <Formik>
          <StyledCardForm>
            <CustomInput
              type="text"
              label="Номер картки"
              name="cardNumber"
              defaultValue={selectedCard?.cardNumber || ""}
            />
            <CustomInput
              type="text"
              label="Термін дії"
              name="validity"
              defaultValue={editCardDateInInput(selectedCard?.cardDate) || ""}
            />
            <CustomInput
              type="text"
              label="CVV"
              name="cardCVС"
              defaultValue={selectedCard?.cardCVC || ""}
            />
            <StyledPayButton>Оплатити</StyledPayButton>
          </StyledCardForm>
        </Formik>
      </CustomRadioButton>
      <CustomRadioButton
        value="offline"
        selected={selected === "offline"}
        text="Оплатити при отриманні"
        onChange={setSelected}
      >
        {selected === "offline" && (
          <StypedOfflinePaymentWrapper>
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
          </StypedOfflinePaymentWrapper>
        )}
      </CustomRadioButton>
    </>
  );
};
