import "./FooterTittle.css";
import Button from "../../Buttons/Button";
import { Container } from "../../../main.styled";
import { Formik } from "formik";
import { useUserSubscribeMutation } from "../../../redux/user/userSlice/userApi";
// import { useState } from "react";

import { userSubscribeValidationSchema } from "components/form/formHelpers/formValidation";
import { CustomInputWhite } from "components/form/formElements/CustomInput/CustomInput.styled";
import { StyledFooterForm } from "../Footer.styled";

function FooterTittle() {
  const [userSubscribe] = useUserSubscribeMutation();

  const initialValues = {
    email: "",
  };

  const onSubmit = async values => {
    try {
      const { data } = await userSubscribe(values);
      console.log("onSubmit  data", data);
    } catch (error) {
      console.error(error);
    }
    console.log("send email", values);
  };
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
            onSubmit={onSubmit}
          >
            {formik => (
              console.log(formik.values),
              (
                <StyledFooterForm>
                  <CustomInputWhite
                    name="email"
                    type="text"
                    label=""
                    placeholder="Email"
                    // className="footer__tittle-input"
                  />
                  {/* {formik.touched.email &&
                    formik.errors.email &&
                    {
                      <p style={{ color: "red" }}>{formik.errors.email}</p> 
                    }} */}
                  <Button type="submit" className="footer__tittle-btn">
                    Підписатися
                  </Button>
                </StyledFooterForm>
              )
            )}
          </Formik>
        </div>
      </div>
    </Container>

    // </div>
  );
}

export default FooterTittle;
