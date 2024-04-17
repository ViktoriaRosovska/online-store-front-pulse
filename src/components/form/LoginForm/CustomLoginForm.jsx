import { Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { useLoginUserMutation } from "../../../redux/auth/userAuthApi";
import { useAuth } from "../../../context/AuthProvider";

const CustomLoginForm = () => {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { data, isLoading, isSuccess }] = useLoginUserMutation();

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      login(data?.user, data?.token, data?.favoriteProducts);
    }
  }, [isSuccess, data, login]);

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
          console.log(values);

          const result = await loginUser(values);
          console.log(result);
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
          </div>
        )}
      </Formik>
    </>
  );
};

export default CustomLoginForm;
