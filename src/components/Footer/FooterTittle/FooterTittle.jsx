import "./FooterTittle.css";
import Button from "../../Buttons/Button";
import { Container } from "../../../main.styled";
import { Formik } from "formik";
import { useUserSubscribeMutation } from "../../../redux/user/userSlice/userApi";
// import { useState } from "react";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { userSubscribeValidationSchema } from "components/form/formHelpers/formValidation";

function FooterTittle() {
  const [userSubscribe] = useUserSubscribeMutation();

  // const [userEmail, setUserEmail] = useState("");

  //  useHandleLoginSuccess(isSuccess, data);

  //  useHandleAuthErrors(isError, error);

  const initialValues = {
    email: "",
  };

  // const onSubmit = async values => {
  //   console.log("send emeil", values);

  //   userSubscribe(values);
  // };
  return (
    <Container>
      <div className="footer__inner">
        <div className="footer__tittle">
          <span className="main__tittle-text">ПІДПИШИСЬ</span>
          <span className="secondary__tittle-text">
            Підпишись та отримай знижку -10 % за першу покупку
          </span>

          <Formik
            initialValues={initialValues}
            validateOnBlur
            validationSchema={userSubscribeValidationSchema}
            onSubmit={async values => {
              await userSubscribe(values);
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
            }) => (
              <form>
                <CustomInput
                  name="email"
                  type="text"
                  label=""
                  placeholder="Email"
                  className="footer__tittle-input"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <p style={{ color: "red" }}>{errors.email}</p>
                )}
                <Button
                  text="Підписатися"
                  type="submit"
                  className="footer__tittle-btn"
                  onClick={handleSubmit}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Container>

    // </div>
  );
}

export default FooterTittle;
