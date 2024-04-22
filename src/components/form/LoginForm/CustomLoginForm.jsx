import { Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { loginValidationSchema } from "../formHelpers/formValidation";
import {
  useLoginUserMutation,
  useHandleLoginSuccess,
  useHandleAuthErrors,
} from "../../../redux/auth";

const CustomLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { data, isLoading, isSuccess, isError, error }] =
    useLoginUserMutation();

  useHandleLoginSuccess(isSuccess, data);

  useHandleAuthErrors(isError, error);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          await loginUser(values);
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

                <button
                  className={"custom_form_button"}
                  onClick={handleSubmit}
                  type={"submit"}
                  disabled={!isValid && !dirty}
                >
                  Увійти
                </button>
              </>
            )}
          </div>
        )}
      </Formik>
    </>
  );
};

export default CustomLoginForm;
