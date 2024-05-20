import { Formik } from "formik";
import { Notify } from "notiflix";
import { Button, StyledForm } from "../LoginForm/CustomLoginForm.styled";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { forgotPasswordValidationSchema } from "../formHelpers/formValidation";
import { useUserForgotPasswordMutation } from "../../../redux/user/userSlice/userApi";

const UserForgotPasswordForm = ({ onClose }) => {
  const [userForgotPassword] = useUserForgotPasswordMutation();

  const onSubmit = async values => {
    try {
      await userForgotPassword(values)
        .unwrap()
        .then(() => {
          onClose();
          return Notify.success(
            "Лист для скидання паролю надіслано. Перевірте свій email",
            {
              position: "center-center",
            }
          );
        })
        .catch(error => {
          console.log("onCatch error", error);
          if (error.status === 404) {
            return Notify.warning(
              "Такої пошти не існує. Перевірте email або зареєструйтесь",
              {
                position: "center-center",
              }
            );
          }
        });
    } catch (error) {
      console.log("onSubmit  error", error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
            />
            <Button type="submit">Відправити</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default UserForgotPasswordForm;
