import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Notify } from "notiflix";
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
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import { Title } from "components/Typography/Typography.styled";
import ModalDeleteUser from "components/Modals/ModalDeleteUser/ModalDeleteUser";
// import { formatPhoneNumber } from "../formHelpers/formatPhoneNumber";
import { clearShopCart } from "../../../redux/user/userShopCart/userShopCartSlice";
import { clearPromoCode } from "../../../redux/promoCode/promoCodeSlice";
import { Loader } from "../../Loader/Loader";

const UserEditForm = ({ selectedFile }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [userUpdate] = useUserUpdateMutation();
  const [userDelete] = useUserDeleteMutation();
  const user = data?.user;

  useEffect(() => {
    refetch();
  }, [refetch]);

  // const phoneNumber =
  //   user?.phone === "0000000000" ? "" : formatPhoneNumber(user?.phone);

  const onSubmit = async values => {
    const formData = new FormData();
    console.log("values phone", values.phone);
    if (values.phone !== "") {
      formData.append("phone", values.phone);
    }
    values.firstName = values.firstName
      ?.split(" ")
      .filter(el => el !== "")
      .join(" ")
      .trim();
    values.lastName = values.lastName
      ?.split(" ")
      .filter(el => el !== "")
      .join(" ")
      .trim();

    // if (values.password) {
    //   if (values.passwordCheck == values.password) {
    //     formData.append("password", values.password);
    //   }
    // }
    Object.keys(values).forEach(key => {
      if (
        // key !== "password" &&
        key !== "passwordCheck" &&
        key !== "phone" &&
        values[key] !== user[key] &&
        values[key] !== ""
      ) {
        formData.append(key, values[key]);
      }
    });

    if (values.phone == "") {
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
    }

    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }

    try {
      await userUpdate(formData)
        .unwrap()
        .then(res => {
          Notify.success("Особисті данні оновлені", {
            position: "center-center",
          });
          return res;
        })
        .catch(error => {
          if (error?.status === 400) {
            return Notify.warning("Помилка внесення даних", {
              position: "center-center",
            });
          }
          if (error?.status === 409) {
            return Notify.failure(
              "Користувач з такою електронною адресою вже існує",
              {
                position: "center-center",
              }
            );
          }
        });

      // const updatedPhoneNumber =
      //   data?.user?.phone === "0000000000"
      //     ? ""
      //     : data?.user?.phone.replace(
      //         /^(\+38)(\d{3})(\d{3})(\d{2})(\d{2})$/,
      //         "$1($2)$3-$4-$5"
      //       );
      // values.phone = updatedPhoneNumber;

      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const formatPhone = number => {
    // console.log("number", number);
    // if (number == "0000000000" || number == "") {
    //   return "";
    // }

    const cc = number.substr(0, 3); // +38
    const ac = number.substr(3, 3); // 053
    const n1 = number.substr(6, 3); // 123
    const n2 = number.substr(9, 2); // 45
    const n3 = number.substr(11, 2); // 67

    let formatted = cc;
    if (cc.length === 3) {
      if (ac.length > 0) formatted += "(" + ac;
      if (ac.length === 3) {
        if (n1.length > 0) formatted += ")" + n1;
        if (n1.length === 3) {
          if (n2.length > 0) formatted += "-" + n2;
          if (n2.length === 2 && n3.length > 0) formatted += "-" + n3;
        }
      }
    }

    return formatted;
    //return formatPhoneNumber(number);
  };

  const onDeleteUser = async () => {
    try {
      await userDelete()
        .unwrap()
        .then(() =>
          Notify.success("Акаунт успішно видалений", {
            position: "center-center",
          })
        )
        .catch(() =>
          Notify.failure("Помилка серверу. Спробуйте ще раз", {
            position: "center-center",
          })
        );
      dispatch(removeCredentials());
      dispatch(clearShopCart());
      dispatch(clearPromoCode());
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader />;
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
    phone: user?.phone,
    password: "",
    passwordCheck: "",
  };

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0])
  // }

  return (
    <Box>
      <Formik
        // enableReinitialize
        initialValues={initialValues}
        validationSchema={userEditValidationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <StyledForm>
            <CustomInput
              label="Ім’я"
              name="firstName"
              type="text"
              placeholder="Ім’я"
              onKeyDown={e => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
            <CustomInput
              label="Прізвище"
              name="lastName"
              type="text"
              placeholder="Прізвище"
              onKeyDown={e => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
              onKeyDown={e => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
            <CustomInput
              label="Номер телефону"
              name="phone"
              type="text"
              placeholder="+38(000)000-00-00"
              onChange={async e => {
                let raw = e.target.value
                  .replace(/[^\d]/g, "")
                  .replace(/^380?|^0+/g, "")
                  .trim();
                if (raw !== "") raw = "+380" + raw.substr(0, 12);

                await setFieldValue("phone", raw);
                //await setFieldValue("phoneStr", formatPhone(raw));
              }}
              value={formatPhone(values.phone)}
            />
            <CustomInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="**********"
              onKeyDown={e => {
                e.key === "Enter" && e.preventDefault();
              }}
              onChange={e => {
                setFieldValue("password", e.target.value.trim());
              }}
            />
            <CustomInput
              label="Повторити пароль"
              name="passwordCheck"
              type="password"
              placeholder="Пароль"
              onKeyDown={e => {
                e.key === "Enter" && e.preventDefault();
              }}
              onChange={e => {
                setFieldValue("passwordCheck", e.target.value.trim());
              }}
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
