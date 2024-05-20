import { Formik } from "formik";
import { loginValidationSchema } from "../formHelpers/formValidation";
import { useLoginUserMutation, setCredentials } from "../../../redux/auth";
import CustomInput from "../formElements/CustomInput/CustomInput";
import {
  Button,
  ForgotPasswordButton,
  StyledForm,
} from "./CustomLoginForm.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { Portal } from "components/Modals/helpersForModal/modalPortal";
// import CommonModal from "components/Modals/CommonModal";
// import ModalForgotPassword from "components/Modals/ModalForgotPassword/ModalForgotPassword";

const CustomLoginForm = ({ onClose, openForgotPasswordModal }) => {
  console.log("CustomLoginForm  openForgotPasswordModal", openForgotPasswordModal)
  // const [isOpenForgotPasswordModal, setIsOpenForgotPasswordModal] =
  // useState(false);
  // console.log("CustomLoginForm  isOpenForgotPasswordModal", isOpenForgotPasswordModal)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data }] = useLoginUserMutation();
  console.log("CustomLoginForm  data", data);

  // const handleOpenForgotPasswordModal = () => {
  //   setIsOpenForgotPasswordModal(true);
  // };

  // const handleCloseForgotPasswordModal = () => {
  //   setIsOpenForgotPasswordModal(false);
  // };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          loginUser(values)
            .unwrap()
            .then(res => {
              dispatch(setCredentials(res));
              navigate("/profile/account");
            });

          onClose();
        }}
      >
        {() => (
          <StyledForm>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ваш email"
            />
            <CustomInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="**********"
            />
            <ForgotPasswordButton
              onClick={openForgotPasswordModal}
              type="button"
            >
              Забули пароль?
            </ForgotPasswordButton>
            <Button type="submit">Увійти</Button>
          </StyledForm>
        )}
      </Formik>
{/* 
      <Portal isOpen={isOpenForgotPasswordModal}>
        <CommonModal onClose={handleCloseForgotPasswordModal} padding='68px 165px'>
          <ModalForgotPassword/>
        </CommonModal>
      </Portal> */}
    </>
  );
};

export default CustomLoginForm;
