import { Formik } from "formik";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { setCredentials, useLoginUserMutation } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { ForgotPasswordButton } from "../LoginForm/CustomLoginForm.styled";

export const ShopCartLoginForm = ({
  onClose,
  openForgotPasswordModal,
  redirectPath,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data }] = useLoginUserMutation();
  console.log("CustomLoginForm  data", data);

  const onSubmit = values => {
    loginUser(values)
      .unwrap()
      .then(res => {
        dispatch(setCredentials(res));
        //    navigate(redirectPath);
        // onClose();
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
        <form>
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
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
            />

            <CustomInput
              label="Пароль"
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
          <StyledShopCartButton type="Submit" text="Увійти" />
        </form>
      )}
    </Formik>
  );
};
