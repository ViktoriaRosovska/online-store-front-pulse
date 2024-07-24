import { Formik } from "formik";
import { Container } from "../../../main.styled";
import { useUserSubscribeMutation } from "../../../redux/user/userSlice/userApi";
import { userSubscribeValidationSchema } from "components/form/formHelpers/formValidation";
import {
  StyledCustomInputWhite,
  StyledFooterButton,
  StyledFooterForm,
} from "../Footer.styled";
import {
  FooterInner,
  FooterWrapper,
  MainText,
  SecondaryText,
} from "./FooterTitle.styled";
import { Notify } from "notiflix";

function FooterTittle() {
  const [userSubscribe] = useUserSubscribeMutation();

  const initialValues = {
    email: "",
  };

  const onSubmit = async values => {
    try {
      await userSubscribe(values)
        .unwrap()
        .then(() =>
          Notify.success("Ви успішно підписались", {
            position: "center-center",
          })
        )
        .catch(error => {
          if (error.status === 409) {
            return Notify.warning("Користувач з таким email вже підписаний", {
              position: "center-center",
            });
          }
          return Notify.failure("Виникла помилка. Спробуйте пізніше", {
            position: "center-center",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <FooterInner>
        <FooterWrapper>
          <MainText>ПІДПИШИСЬ</MainText>
          <SecondaryText>
            Підпишись та отримай знижку -10% на першу покупку
          </SecondaryText>

          <Formik
            initialValues={initialValues}
            validationSchema={userSubscribeValidationSchema}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={true}
            enableReinitialize
          >
            {formik => (
              console.log(formik.values),
              (
                <StyledFooterForm>
                  <StyledCustomInputWhite
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="whiteInput"
                  />

                  <StyledFooterButton type="submit">
                    Підписатися
                  </StyledFooterButton>
                </StyledFooterForm>
              )
            )}
          </Formik>
        </FooterWrapper>
      </FooterInner>
    </Container>
  );
}

export default FooterTittle;
