import { Formik } from "formik"
import { Button, StyledForm } from "../LoginForm/CustomLoginForm.styled"
import CustomInput from "../formElements/CustomInput/CustomInput"
import { forgotPasswordValidationSchema } from "../formHelpers/formValidation"

const UserForgotPasswordForm = () => {
    return (
       <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgotPasswordValidationSchema}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
            />
            <Button type="submit">Відправити</Button>
          </StyledForm>
        )}
      </Formik>
    </>
   )
}

export default UserForgotPasswordForm