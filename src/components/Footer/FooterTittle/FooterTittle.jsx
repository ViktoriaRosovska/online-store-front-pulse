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

  const onSubmit = async (values, { resetForm }) => {
    try {
      await userSubscribe(values)
        .unwrap()
        .then(() =>
          Notify.success(
            "Ви успішно підписались. Промокод буде відправлений на вашу електронну пошту",
            {
              position: "center-center",
            }
          )
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
      resetForm();
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
            validateOnChange={true}
            validateOnBlur={false}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({
              setFieldTouched,
              setFieldValue,
              errors,
              setErrors,
              values,
            }) => (
              <StyledFooterForm noValidate>
                <StyledCustomInputWhite
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="whiteInput"
                  $isError={errors.email}
                  onChange={async e => {
                    // console.log(errors);
                    if (e.target.value == "") {
                      await setFieldTouched({}, false);
                      await setFieldValue("email", "");
                      setErrors({});
                    } else await setFieldValue("email", e.target.value);
                  }}
                  value={values.email}
                />

                <StyledFooterButton btnType="submit" formnovalidate>
                  Підписатися
                </StyledFooterButton>
                {/* <button type="submit"> Підписатися</button> */}
              </StyledFooterForm>
            )}
          </Formik>
        </FooterWrapper>
      </FooterInner>
    </Container>
  );
}

export default FooterTittle;
