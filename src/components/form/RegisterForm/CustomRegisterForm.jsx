import { Formik } from "formik";
// import { FaEye } from "react-icons/fa";
// import { useState } from "react";
// import {
//   useCreateUserMutation,
//   useHandleAuthErrors,
//   useHandleLoginSuccess,
// } from "../../../redux/auth";
import { registerValidationSchema } from "../formHelpers/formValidation";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Button, StyledForm } from "../LoginForm/CustomLoginForm.styled.jsx";
import CustomInput from "../formElements/CustomInput/CustomInput.jsx";
import { setCredentials, useCreateUserMutation } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

const CustomRegisterForm = ({ onClose, redirectPath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const onSubmit = ({ firstName, lastName, email, password }) => {
    createUser({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
    })
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
    <>
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
        validateOnBlur={false}
        validateOnChange={true}
        enableReinitialize
      >
        {() => (
          <StyledForm>
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
            <Button type="submit">Зареєструватися</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CustomRegisterForm;
