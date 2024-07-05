import { Form, Formik } from "formik";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { setCredentials, useLoginUserMutation } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import { Notify } from "notiflix";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { ForgotPasswordButton } from "../LoginForm/CustomLoginForm.styled";
import { StyledLoginFormButton } from "./ShopCartLoginForm.styled";

export const ShopCartLoginForm = ({ openForgotPasswordModal }) => {
  const dispatch = useDispatch();
  const [loginUser, { data }] = useLoginUserMutation();
  console.log("CustomLoginForm  data", data);

  const onSubmit = values => {
    loginUser(values)
      .unwrap()
      .then(res => {
        dispatch(setCredentials(res));
      })
      .catch(error => {
        console.log("CustomLoginForm  error", error);
        if (error.status === 404) {
          Notify.failure(
            "Користувача з таким email не існує. Запеєструйтесь або перевірте email.",
            { position: "center-center" }
          );
        } else {
          Notify.failure("Невірний пароль або email. Спробуйте ще раз", {
            position: "center-center",
          });
        }
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur={false}
      validateOnChange={true}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div
            style={{
              marginBottom: "20px",
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <CustomInput
              label="Email&#42;"
              name="email"
              type="email"
              placeholder="Ваш email"
            />

            <CustomInput
              label="Пароль&#42;"
              name="password"
              type="password"
              placeholder="**********"
            />
          </div>

          <p style={{ textAlign: "right", marginBottom: "20px" }}>
            <ForgotPasswordButton
              onClick={openForgotPasswordModal}
              type="button"
            >
              Забули пароль?
            </ForgotPasswordButton>
          </p>
          <StyledLoginFormButton type="submit">Увійти</StyledLoginFormButton>
        </Form>
      )}
    </Formik>
  );
};
