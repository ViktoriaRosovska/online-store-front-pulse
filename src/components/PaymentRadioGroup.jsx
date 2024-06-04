import { useState } from "react";
import { CustomRadioButton } from "./CustomRadioButton/CustomRadioButton";
import { Formik } from "formik";
import CustomInput from "./form/formElements/CustomInput/CustomInput";
import { ReactComponent as Visa } from "../assets/svg/visa.svg";
import { ReactComponent as Mastercard } from "../assets/svg/master.svg";
import { ReactComponent as ApplePay } from "../assets/svg/applePay.svg";
import { ReactComponent as GooglePay } from "../assets/svg/googlePay.svg";
import {
  StyledCardIconWrapper,
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
        <div>
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
          <StyledPayButton>PAY</StyledPayButton>
        </div>
      </CustomRadioButton>
      <CustomRadioButton
        value="card"
        selected={selected === "card"}
        onChange={setSelected}
        text="Обрати збережену картку"
      >
        <Formik>
          <form>
            <CustomInput type="text" label="Номер картки" name="cardNumber" />
            <CustomInput type="text" label="Термін дії" name="validity" />
            <CustomInput type="text" label="CVV" name="cardCVV" />
          </form>
        </Formik>
      </CustomRadioButton>
      <CustomRadioButton
        value="offline"
        selected={selected === "offline"}
        text="Оплата при отриманні"
        onChange={setSelected}
      />
    </>
  );
};
