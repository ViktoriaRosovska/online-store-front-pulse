import { Formik } from "formik";
import CustomInput from "../formElements/CustomInput/CustomInput";
import {
  Box,
  Button,
  InputWrapper,
  StyledForm,
} from "./UserPaymentForm.styled";
import { validationUserCardSchema } from "../formHelpers/formValidation";
import {
  editCardDateInInput,
  editCardNumberInInput,
  formatDate,
} from "../formHelpers/formUserCardEdit";
import { useAddUserCardMutation } from "../../../redux/user/userSlice/userApi";
import { Notify } from "notiflix";

const UserPaymentForm = ({ onClose }) => {
  const [addUserCard, { isLoading }] = useAddUserCardMutation();

  const initialValues = {
    cardNumber: "",
    cardDate: "",
    cardCVC: "",
    cardName: "",
  };

  const onSubmit = (values, option) => {
    values.cardNumber = values.cardNumber.replace(/\s/g, "");
    values.cardDate = formatDate(values.cardDate);
    try {
      addUserCard(values)
        .unwrap()
        .catch(error => {
          if (error.status === 409) {
            return Notify.failure("Платіжна карта вже існує", {
              position: "center-center",
            });
          } else {
            return Notify.warning("Виникла помилка. Спробуйте пізніше", {
              position: "center-center",
            });
          }
        });
      option.resetForm();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationUserCardSchema}
        validateOnChange={true}
      >
        {formik => (
          <StyledForm>
            <CustomInput
              label="Номер карти"
              name="cardNumber"
              type="text"
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
            <InputWrapper>
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
                minLength="3"
                onChange={event => {
                  formik.setFieldValue(
                    "cardCVC",
                    event.target.value.replace(/[^0-9\-()]/g, "")
                  );
                }}
              />
            </InputWrapper>
            <CustomInput
              label="Ім’я на карті"
              name="cardName"
              type="text"
              placeholder="Ім’я на карті"
            />
            <Button type="submit">Зберегти</Button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};

export default UserPaymentForm;
