import { setCredentials, useCreateUserMutation } from "../../../redux/auth";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Notify } from "notiflix";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "../formHelpers/formValidation";
import { useDispatch } from "react-redux";
import { StyledLoginFormButton } from "../ShopCartLoginForm/ShopCartLoginForm.styled";

export const ShopCartRegisterForm = () => {
  const dispatch = useDispatch();

  const [createUser] = useCreateUserMutation();
  const onSubmit = ({ firstName, lastName, email, password }) => {
    createUser({ firstName, lastName, email, password })
      .unwrap()
      .then(res => {
        dispatch(setCredentials(res));
      })
      .catch(error => {
        if (error.status === 409) {
          Notify.warning("Користувач з таким email вже існує.", {
            position: "center-center",
          });
        }
      });
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: "",
      }}
      validationSchema={registerValidationSchema}
      enableReinitialize
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
              label="Ім’я&#42;"
              name="firstName"
              type="text"
              placeholder="Ім’я"
            />
            <CustomInput
              label="Прізвище&#42;"
              name="lastName"
              type="text"
              placeholder="Прізвище"
            />
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
            <CustomInput
              label="Повторити пароль&#42;"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
            />
            <StyledLoginFormButton type="submit">
              Зареєструватись
            </StyledLoginFormButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
