import { useState } from "react";
import CustomLoginForm from "components/form/LoginForm/CustomLoginForm";
import CustomRegisterForm from "components/form/RegisterForm/CustomRegisterForm";
import { ReactComponent as GoogleSvg } from "../../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../../assets/svg/facebook.svg";
import {
  Button,
  Line,
  Navigation,
  OrText,
  OrWrapper,
  QuestionText,
  Register,
  SocialBox,
  Wrapper,
} from "./ModalAuth.styled";
// import { useLoginUserGoogleQuery } from "../../../redux/auth";

const ModalAuth = ({ onClose, openForgotPasswordModal }) => {
  // const loginUserGoogle = useLoginUserGoogleQuery();
  const [mode, setMode] = useState("login");

  // const handleGoogleLogin = async() => {
  //     try {
  //         await loginUserGoogle.refetch()
  //     } catch (error) {
  //         console.log("handleGoogleLogin  error", error)

  //     }
  // }

  const switchToLogin = () => {
    setMode("login");
  };

  const switchToRegister = () => {
    setMode("register");
  };

  return (
    <>
      <Navigation>
        <Button
          $login
          $active={mode === "login"}
          type="button"
          onClick={switchToLogin}
        >
          Вхід
        </Button>
        <Button
          $active={mode === "register"}
          type="button"
          onClick={switchToRegister}
        >
          Реєстрація
        </Button>
      </Navigation>
      {mode === "login" ? (
        <CustomLoginForm onClose={onClose} openForgotPasswordModal={openForgotPasswordModal} />
      ) : (
        <CustomRegisterForm onClose={onClose} />
      )}
      {mode === "login" ? (
        <Wrapper>
          <QuestionText>Немає облікового запису?</QuestionText>
          <Register onClick={switchToRegister}>Зареєструватися</Register>
        </Wrapper>
      ) : null}

      <OrWrapper>
        <Line />
        <OrText>Або</OrText>
        <Line />
      </OrWrapper>

      <SocialBox>
        <button>
          <GoogleSvg />
        </button>
        <button>
          <FacebookSvg />
        </button>
      </SocialBox>
    </>
  );
};

export default ModalAuth;
