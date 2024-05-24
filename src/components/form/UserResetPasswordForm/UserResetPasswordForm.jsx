import { Formik } from "formik";
import { Button, StyledForm } from "../LoginForm/CustomLoginForm.styled";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { resetPasswordValidationSchema } from "../formHelpers/formValidation";
import { useUserResetPasswordMutation } from "../../../redux/user/userSlice/userApi";
import { Notify } from "notiflix";

const UserResetPasswordForm = ({ onClose }) => {
  const [userResetPassword] = useUserResetPasswordMutation();

  const query = new URLSearchParams(location.search);
  console.log("UserResetPasswordForm  query", query);
  const resetToken = query.get("resetToken");
  console.log("UserResetPasswordForm  resetToken", resetToken);

  const onSubmit = async ({ password }) => {
    try {
      await userResetPassword({ password, resetToken })
        .unwrap()
        .then(() => {
          onClose();
          return Notify.success(
            "Пароль поновлено. Введіть новий пароль, щоб увійти в додаток",
            {
              position: "center-center",
            }
          );
        })
        .catch(error => {
          if (error?.status === 400) {
            Notify.failure(
              "Неправильний або застарілий лінк, введіть повторно email та отримайте новий лінк для поновлення пароля",
              { position: "center-center" }
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
          password: "",
          passwordCheck: "",
        }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Новий пароль"
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <CustomInput
              label="Повторити пароль"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
            />
            {/* <ForgotPasswordButton
              onClick={openForgotPasswordModal}
              type="button"
            >
              Забули пароль?
            </ForgotPasswordButton> */}
            <Button type="submit">Увійти</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default UserResetPasswordForm;
