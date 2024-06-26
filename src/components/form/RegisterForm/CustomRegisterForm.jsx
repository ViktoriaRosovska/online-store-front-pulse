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
      >
        {() => (
          <StyledForm>
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
            <Button type="submit">Зареєструватися</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CustomRegisterForm;
