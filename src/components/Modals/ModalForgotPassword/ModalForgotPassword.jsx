import UserForgotPasswordForm from "components/form/UserForgotPasswordForm/UserForgotPasswordForm";
import { ReturnButton, StyledTitle, Text } from "./ModalForgotPassword.styled";
import { Line, OrText, OrWrapper } from "../ModalAuth/ModalAuth.styled";

const ModalForgotPassword = ({ onClose, openLoginModal }) => {
  const handleOpenAuthModal = () => {
    onClose()
    openLoginModal()
  }

  return (
    <>
      <StyledTitle>Забули пароль?</StyledTitle>
      <Text>
        Вкажіть адресу електронної пошти, до якого прив&#39;язаний аккаунт, і ми
        надішлемо посилання для відновлення пароля.
      </Text>
      <UserForgotPasswordForm onClose={onClose} />

      <OrWrapper>
        <Line />
        <OrText>Або</OrText>
        <Line />
      </OrWrapper>

      <ReturnButton onClick={handleOpenAuthModal}>Повернутися до авторизації</ReturnButton>
    </>
  );
};

export default ModalForgotPassword;
