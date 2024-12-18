import { Formik } from "formik";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { useLoginUserMutation, setCredentials } from "../../../redux/auth";
import CustomInput from "../formElements/CustomInput/CustomInput";
import {
  Button,
  ForgotPasswordButton,
  StyledForm,
} from "./CustomLoginForm.styled";

import { useDispatch } from "react-redux";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

const CustomLoginForm = ({
  onClose,
  openForgotPasswordModal,
  redirectPath,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const onSubmit = values => {
    loginUser(values)
      .unwrap()
      .then(res => {
        dispatch(setCredentials(res));
        navigate(redirectPath);
        onClose();
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
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={true}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <StyledForm>
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
              onChange={e => {
                setFieldValue(
                  "password",
                  e.target.value.replace(/ /, "").trim()
                );
              }}
              value={values?.password}
            />
            <ForgotPasswordButton
              onClick={openForgotPasswordModal}
              type="button"
            >
              Забули пароль?
            </ForgotPasswordButton>
            <Button type="submit">Увійти</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CustomLoginForm;
