import "./CustomForm.css";
import { Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import {
  useCreateUserMutation,
  useHandleAuthErrors,
  useHandleLoginSuccess,
} from "../../../redux/auth";
import { registerValidationSchema } from "../formHelpers/formValidation";

const CustomRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [createUser, { data, isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

  useHandleLoginSuccess(isSuccess, data);

  useHandleAuthErrors(isError, error);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        validationSchema={registerValidationSchema}
        onSubmit={async values => {
          const newUser = {
            firstName: values.name,
            lastName: values.surname,
            email: values.email,
            password: values.password,
          };

          await createUser(newUser);
        }}
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
            {isLoading ? (
              <p>Request is in process, please wait...</p>
            ) : (
              <>
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
                    placeholder={"Ваш email"}
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
                    <FaEye
                      className={"eyes1"}
                      style={{ cursor: "pointer" }}
                      onClick={handleClickShowPassword}
                    />
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
              </>
            )}
          </div>
        )}
      </Formik>
    </>
  );
};

export default CustomRegisterForm;
