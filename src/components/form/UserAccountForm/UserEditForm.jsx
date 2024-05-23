import { Formik } from "formik";
import { userEditValidationSchema } from "../formHelpers/formValidation";
import CustomInput from "../formElements/CustomInput/CustomInput";
import { Box, Button, DeleteButton, StyledForm } from "./UserEditForm.styled";
import {
  removeCredentials,
  useFetchCurrentUserQuery,
} from "../../../redux/auth";
import {
  useUserDeleteMutation,
  useUserUpdateMutation,
} from "../../../redux/user/userSlice/userApi";
import { useState } from "react";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import { Title } from "components/Typography/Typography.styled";
import ModalDeleteUser from "components/Modals/ModalDeleteUser/ModalDeleteUser";
import { useDispatch } from "react-redux";
import { formatPhoneNumber } from "../formHelpers/formatPhoneNumber";
import { Notify } from "notiflix";

const UserEditForm = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [userUpdate] = useUserUpdateMutation();
  const [userDelete] = useUserDeleteMutation();
  const user = data?.user;

  const phoneNumber =
    user?.phone === "0000000000" ? "" : formatPhoneNumber(user?.phone);

  const onSubmit = async values => {
    const updatedUser = {};

    if (values.phone !== "") {
      values.phone = values.phone.replace(/[\s()-]/g, "");
    }

    Object.keys(values).forEach(key => {
      if (
        key !== "passwordCheck" &&
        values[key] !== user[key] &&
        values[key] !== ""
      ) {
        updatedUser[key] = values[key];
      }
    });

    try {
      const { data } = await userUpdate(updatedUser)
        .unwrap()
        .then(res => {
          Notify.success("Особисті данні оновлені", {
            position: "center-center",
          });
          return res;
        })
        .catch(error => {
          console.log(error);
          if (error?.status === 400) {
            return Notify.warning("Ви не внесли ніяких змін", {
              position: "center-center",
            });
          }
        });
      
      const updatedPhoneNumber =
        data?.user?.phone === "0000000000"
          ? ""
          : data?.user?.phone.replace(
              /^(\+38)(\d{3})(\d{3})(\d{2})(\d{2})$/,
              "$1($2)$3-$4-$5"
            );
      values.phone = updatedPhoneNumber;

      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteUser = async () => {
    try {
      await userDelete()
        .unwrap()
        .then(() =>
          Notify.success("Аккаун успішно видалений", {
            position: "center-center",
          })
        )
        .catch(() =>
          Notify.failure("Помилка серверу. Спробуйте ще раз", {
            position: "center-center",
          })
        );
      dispatch(removeCredentials());
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleOpenMobile = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: phoneNumber,
    password: "",
    passwordCheck: "",
  };

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
              placeholder="Номер телефону"
              mask={[
                "+",
                "3",
                "8",
                "(",
                "0",
                /[0-9]/,
                /[0-9]/,
                ")",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
              ]}
            />
            <CustomInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="**********"
            />
            <CustomInput
              label="Повторити пароль"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
            />
            <Button type="submit">Зберегти</Button>
          </StyledForm>
        )}
      </Formik>
      <DeleteButton onClick={handleOpenMobile} type="button">
        Видалити акаунт
      </DeleteButton>

      <Portal isOpen={isOpenModal}>
        <CommonModal
          onClose={handleCloseModal}
          padding="57px 105px 50px"
          top="50px"
        >
          <Title>Видалити акаунт?</Title>
          <ModalDeleteUser
            onDeleteUser={onDeleteUser}
            onClose={handleCloseModal}
          />
        </CommonModal>
      </Portal>
    </Box>
  );
};

export default UserEditForm;
