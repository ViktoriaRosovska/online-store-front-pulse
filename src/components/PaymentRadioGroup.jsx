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
  StyledOnlinePaymentWrapper,
  StyledPayButton,
} from "./CustomRadioButton/CustomRadioButton.styled";

export const PaymentRadioGroup = () => {
  const [selected, setSelected] = useState("card");

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
        text="Обрати збережену картку"
      >
        <Formik>
          <StyledCardForm>
            <CustomInput type="text" label="Номер картки" name="cardNumber" />
            <CustomInput type="text" label="Термін дії" name="validity" />
            <CustomInput type="text" label="CVV" name="cardCVV" />
            <StyledPayButton>Оплатити</StyledPayButton>
          </StyledCardForm>
        </Formik>
      </CustomRadioButton>
      <CustomRadioButton
        value="offline"
        selected={selected === "offline"}
        text="Оплата при отриманні"
        onChange={setSelected}
      >
        {selected === "offline" && (
          <div>
            <p>
              При отриманні замовлення у відділенні “Нова пошта“, а також при
              виборі кур&apos;єрської доставки “Нова пошта”, можна оплатити
              карткою або готівкою. Додаткова комісія за грошовий переказ: 20
              грн. + 2% від суми переказу.
            </p>
            <StyledPayButton>Підтвердити замовлення</StyledPayButton>
          </div>
        )}
      </CustomRadioButton>
    </>
  );
};
