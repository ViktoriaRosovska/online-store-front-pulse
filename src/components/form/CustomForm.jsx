import "./CustomForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const CustomForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validationsShema = Yup.object().shape({
    name: Yup.string()
      .typeError("Повинно бути строкою")
      .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
      .required("обовʼязкове поле"),
    surname: Yup.string()
      .typeError("Повинно бути строкою")
      .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
      .required("обовʼязкове поле"),
    email: Yup.string()
      .email("Введіть коректний email")
      .required("обовʼязкове поле"),
    password: Yup.string()
      .typeError("Повинно бути строкою")
      .matches(/^(?=.*[a-z])(?=.*\d)/, {
        message: "Пароль має містити літери та цифри",
      })
      .min(6, "Пароль має бути не менш ніж 6 символів")
      .max(10, "Максимальна кількість 10 символів")
      .required("обовʼязкове поле"),
    passwordCheck: Yup.string()
      .oneOf([Yup.ref("password")], "Паролі не співпадають")
      .min(6, "Пароль має бути не менш ніж 6 символів")
      .max(10, "Максимальна кількість 10 символів")
      .required("обовʼязкове поле"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
          passwordCheck: "",
        }}
        validateOnBlur
        validationSchema={validationsShema}
        onSubmit={values => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={"input_container form"}>
            <p>
              <label htmlFor={"name"}>{"Імʼя"}</label>
              <input
                id={"name"}
                placeholder={"Імʼя"}
                type="text"
                name={"name"}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {touched.name && errors.name && (
              <p style={{ color: "red" }}>{errors.name}</p>
            )}

            <p>
              <label htmlFor={"surname"}>{"Прізвище"}</label>
              <input
                id={"surname"}
                placeholder={"Прізвище"}
                type="text"
                name={"surname"}
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {touched.surname && errors.surname && (
              <p style={{ color: "red" }}>{errors.surname}</p>
            )}

            <p>
              <label htmlFor={"email"}>{"Email"}</label>
              <input
                id={"email"}
                placeholder={"email"}
                type="text"
                name={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {touched.email && errors.email && (
              <p style={{ color: "red" }}>{errors.email}</p>
            )}

            <p>
              <label htmlFor={"password"}>
                <FaEye
                  className={"eyes"}
                  style={{ cursor: "pointer" }}
                  onClick={handleClickShowPassword}
                />
                {"Пароль"}
              </label>
              <input
                id={"password"}
                placeholder={"Пароль"}
                type={!showPassword ? "password" : "text"}
                name={"password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {touched.password && errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            <p>
              <label htmlFor={"password"}>
                {
                  <FaEye
                    className={"eyes1"}
                    style={{ cursor: "pointer" }}
                    onClick={handleClickShowPassword}
                  />
                }
                {"Повторити пароль"}
              </label>

              <input
                id={"passwordCheck"}
                placeholder={"Пароль"}
                type={!showPassword ? "password" : "text"}
                name={"passwordCheck"}
                value={values.passwordCheck}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>

            {touched.passwordCheck && errors.passwordCheck && (
              <p style={{ color: "red" }}>{errors.passwordCheck}</p>
            )}

            <button
              className={"custom_form_button"}
              onClick={handleSubmit}
              type={"submit"}
              disabled={!isValid && !dirty}
            >
              Реєстрація
            </button>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CustomForm;
