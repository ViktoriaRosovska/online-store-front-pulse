import { Formik } from "formik";
import { userEditValidationSchema } from "../formHelpers/formValidation";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Box, Button, DeleteButton, StyledForm } from "./UserEditForm.styled";
import { useFetchCurrentUserQuery } from "../../../redux/auth";
import {
  useUserDeleteMutation,
  useUserUpdateMutation,
} from "../../../redux/user/userSlice/userApi";

const UserEditForm = () => {
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [userUpdate, { isError }] = useUserUpdateMutation();
  const [userDelete] = useUserDeleteMutation();
  console.log("UserEditForm  isError", isError);
  const user = data?.user;
  console.log("UserEditForm  user", user)

  const phoneNumber = user?.phone === "0000000000" ? "" : user?.phone;

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: phoneNumber || "",
    password: "",
    checkPassword: "",
  };

  const onSubmit = async values => {
    const updatedUser = {};

    Object.keys(values).forEach(key => {
      if (
        key !== "checkPassword" &&
        values[key] !== user[key] &&
        values[key] !== ""
      ) {
        updatedUser[key] = values[key];
      }
    });

    try {
      const { data } = await userUpdate(updatedUser);
      console.log("onSubmit  data", data);

      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteUser = async () => {
    try {
      await userDelete();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={userEditValidationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Ім’я"
              name="firstName"
              type="text"
              placeholder="Ім’я"
            />
            <CustomInput
              label="Прізвище"
              name="lastName"
              type="text"
              placeholder="Прізвище"
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
            />
            <CustomInput
              label="Номер телефону"
              name="phone"
              type="text"
              placeholder="671112233"
            />
            <CustomInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="**********"
            />
            <CustomInput
              label="Повторити пароль"
              name="checkPassword"
              type="password"
              placeholder="Пароль"
            />
            <Button type="submit">Зберегти</Button>
          </StyledForm>
        )}
      </Formik>
      <DeleteButton onClick={onDeleteUser} type="button">
        Видалити акаунт
      </DeleteButton>
    </Box>
  );
};

export default UserEditForm;
