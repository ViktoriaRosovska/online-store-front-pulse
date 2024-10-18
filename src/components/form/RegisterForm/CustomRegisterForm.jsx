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

const formatName = name => {
  console.log(name[0]);

  if (name[0] == " ") {
    name = name.trimStart();
  }
  if (name[name.length - 1] === " " && name[name.length - 2] === " ") {
    name = name.replace(/ {2,}/g, " ");
  }

  return name;
};

const CustomRegisterForm = ({ onClose, redirectPath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const handleOnChange = e => {
    // let mas = e.target.value.split(" ");
    // console.log(mas);
    // console.log(mas.filter(el => el !== " ").join(" "));
  };
  const onSubmit = ({ firstName, lastName, email, password }) => {
    createUser({
      firstName: firstName
        .trim()
        .split(" ")
        .filter(el => el !== " ")
        .join(" "),
      lastName: lastName
        .trim()
        .split(" ")
        .filter(el => el !== " ")
        .join(" "),
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
        {({ setFieldValue, values }) => (
          <StyledForm>
            <CustomInput
              label="Ім’я&#42;"
              name="firstName"
              type="text"
              placeholder="Ім’я"
              onChange={e => {
                handleOnChange(e);
                setFieldValue("firstName", formatName(e.target.value));
              }}
              value={values?.firstName}
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
              onChange={e => {
                setFieldValue("password", e.target.value.trim());
              }}
              value={values?.password}
            />
            <CustomInput
              label="Повторити пароль&#42;"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
              onChange={e => {
                setFieldValue("passwordCheck", e.target.value.trim());
              }}
              value={values?.passwordCheck}
            />
            <Button type="submit">Зареєструватися</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CustomRegisterForm;
