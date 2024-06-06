import "./FooterTittle.css";

import { Container } from "../../../main.styled";
import { Formik } from "formik";
import { useUserSubscribeMutation } from "../../../redux/user/userSlice/userApi";
// import { useState } from "react";

import { userSubscribeValidationSchema } from "components/form/formHelpers/formValidation";

import { StyledCustomInputWhite, StyledFooterForm } from "../Footer.styled";

import { HeroButton } from "../../../pages/main/MainPage.styled";

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
            Підпишись та отримай знижку -10% на першу покупку
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
                  <StyledCustomInputWhite
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="whiteInput"
                    // className="footer__tittle-input"
                  />

                  <HeroButton type="submit">Підписатися</HeroButton>
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
