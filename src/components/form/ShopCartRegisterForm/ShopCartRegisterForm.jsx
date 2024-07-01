import { setCredentials, useCreateUserMutation } from "../../../redux/auth";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Notify } from "notiflix";
import { Formik } from "formik";
import { registerValidationSchema } from "../formHelpers/formValidation";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ShopCartRegisterForm = ({ onClose, redirectPath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const onSubmit = ({ firstName, lastName, email, password }) => {
    createUser({ firstName, lastName, email, password })
      .unwrap()
      .then(res => {
        dispatch(setCredentials(res));
        navigate(redirectPath);
        onClose();
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
              label="Ім’я"
              name="firstName"
              type="text"
              placeholder="Ім’я"
            />
            <CustomInput
              label="Прізвище"
              name="lastName"
              type="text"
              placeholder="Прізвище"
            />
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
            <CustomInput
              label="Повторити пароль"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
            />
            <StyledShopCartButton type="Submit" text="Зареєструватись" />
          </div>
        </form>
      )}
    </Formik>
  );
};

const CustomRegisterForm = ({ onClose, redirectPath }) => {};
