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
import UserResetPasswordForm from "components/form/UserResetPasswordForm/UserResetPasswordForm";
import { useLoginUserGoogleQuery } from "../../../redux/auth";

const ModalAuth = ({ onClose, openForgotPasswordModal, resetPassword, redirectPath }) => {
  const {data, isLoading, error, refetch} = useLoginUserGoogleQuery();
  console.log("ModalAuth  isLoading", isLoading)
  console.log("ModalAuth  error", error)
  console.log("ModalAuth  data", data)
  const [mode, setMode] = useState("login");

  const handleGoogleLogin = async() => {
      refetch()
  }
//   const handleGoogleLogin = async() => {window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http://localhost:5173/online-store-front-pulse&scope=profile%20email&client_id=978298121964-08iv7n2kehtn2iin4hjph7h2cjjnaige.apps.googleusercontent.com"
//     // ;
//     // window.location.href = "https://pulse-run-api.onrender.com/api/auth/google?clientId=978298121964-08iv7n2kehtn2iin4hjph7h2cjjnaige.apps.googleusercontent.com";
//     // await loginUserGoogle()

// };

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
      {mode === "login" ? (resetPassword ? <UserResetPasswordForm onClose={onClose}/> :
        <CustomLoginForm onClose={onClose} openForgotPasswordModal={openForgotPasswordModal} redirectPath={redirectPath} />
      ) : (
          <CustomRegisterForm onClose={onClose} redirectPath={redirectPath} />
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
        <button onClick={handleGoogleLogin}>
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
