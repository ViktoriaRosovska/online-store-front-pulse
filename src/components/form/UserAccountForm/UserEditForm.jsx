import { Formik } from "formik";
import { UserEditValidationSchema } from "../formHelpers/formValidation";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { SaveButton, StyledForm } from "./UserEditForm.styled";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../redux/auth";

const UserEditForm = () => {
  const user = useSelector(selectUserData);
  console.log("UserEditForm  user", user);

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    checkPassword: "",
  };

  const onSubmit = values => {
    console.log(values);
  };
    return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserEditValidationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <StyledForm>
          <CustomInput
            label="Ім’я"
            name="name"
            type="text"
            placeholder="Ім’я"
          />
          <CustomInput
            label="Прізвище"
            name="surname"
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
            label="Номер телефону"
            name="phone"
            type="text"
            placeholder="+380"
          />
          <CustomInput
            label="Пароль"
            name="password"
            type="password"
            placeholder="**********"
          />
          <CustomInput
            label="Повторити пароль"
            name="checkPassword"
            type="password"
            placeholder="Пароль"
          />
          <SaveButton>Зберегти</SaveButton>
        </StyledForm>
      )}
            </Formik>
  );
};

export default UserEditForm;
