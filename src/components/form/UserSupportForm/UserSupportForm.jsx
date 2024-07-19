import { Formik } from "formik";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Button, StyledForm } from "./UserSupportForm.styled";
import { useSendSupportMessageMutation } from "../../../redux/user/userSlice/userApi";
import { userSupportValidationSchema } from "../formHelpers/formValidation";

const UserSupportForm = ({ user }) => {
  const [sendSupportMessage] = useSendSupportMessageMutation();

  const onSubmit = ({ name, email, subject, message }, options) => {
    sendSupportMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });
    options.resetForm();
  };

  const initialValues = {
    name: user ? user?.firstName : "",
    email: user ? user?.email : "",
    subject: "",
    message: "",
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={userSupportValidationSchema}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Ваше ім’я"
              name="name"
              type="text"
              placeholder="Ваше ім’я"
            />
            <CustomInput
              label="Ваш email"
              name="email"
              type="text"
              placeholder="Ваш email"
            />
            <CustomInput
              label="Тема повідомлення"
              name="subject"
              type="text"
              placeholder="Тема"
            />
            <CustomInput
              label="Текст повідомлення"
              name="message"
              type="text"
              placeholder="Введіть текст"
              $textarea
            />

            <Button type="submit">Відправити</Button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default UserSupportForm;
