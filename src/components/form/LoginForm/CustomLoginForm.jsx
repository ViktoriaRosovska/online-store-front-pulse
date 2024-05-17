import { Formik } from "formik";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { useLoginUserMutation, setCredentials } from "../../../redux/auth";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Button, StyledForm } from "./CustomLoginForm.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CustomLoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data }] = useLoginUserMutation();

  console.log(data);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          loginUser(values)
            .unwrap()
            .then(res => {
              dispatch(setCredentials(res));
              console.log("SUCCESS");
              navigate("/profile/account");
            });
          console.log("loginUser  data", data);
          onClose();
        }}
      >
        {() => (
          <StyledForm>
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
            <button type="button">Забули пароль?</button>
            <Button type="submit">Увійти</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default CustomLoginForm;
