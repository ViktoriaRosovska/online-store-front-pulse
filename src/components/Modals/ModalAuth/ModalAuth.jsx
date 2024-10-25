import { useState, useEffect } from "react";
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
  StyledFormWrapper,
  Wrapper,
} from "./ModalAuth.styled";
import UserResetPasswordForm from "components/form/UserResetPasswordForm/UserResetPasswordForm";
// import { useLoginUserGoogleQuery } from "../../../redux/auth";
import { useLocation } from "react-router-dom";

// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
import {
  // useLazyLoginUserGoogleQuery,
  useFetchCurrentUserQuery,
} from "../../../redux/auth/userAuthApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/auth";

const ModalAuth = ({
  onClose,
  openForgotPasswordModal,
  resetPassword,
  // redirectPath,
}) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("login");
  const { data: userData, refetch: userRefetch } = useFetchCurrentUserQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const locationPath = useLocation().search;

  // console.log(locationPath);
  // dispatch(setCredentials({ token: token }));

  // const [loginUserGoogle, { data, isLoading, error, refetch }] =
  //   useLazyLoginUserGoogleQuery();

  // const handleGoogleLogin = () => {
  //   let token = locationPath.substring(7, locationPath.length - 1);
  //    console.log(token);

  //    loginUserGoogle();
  //    dispatch(setCredentials({ token: token }));
  // };

  // useEffect(() => {
  //   let token = locationPath.substring(7, locationPath.length - 1);
  //   console.log(token);
  //   if (token)
  //     dispatch(setCredentials({ token: token })).then(() => {
  //       const params = new URLSearchParams(location.search);
  //       params.delete("token");
  //     });
  // }, [dispatch, locationPath]);

  useEffect(() => {
    userRefetch();
  }, [userRefetch]);

  console.log(userData);
  // console.log(data);

  const switchToLogin = () => {
    setMode("login");
  };

  const switchToRegister = () => {
    setMode("register");
  };
  // console.log(data);

  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);
  // console.log(profile);
  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => setUser(codeResponse),
  //   onError: error => console.log("Login Failed:", error),
  // });
  // console.log(import.meta.env.GOOGLE_CLIENT_ID);
  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then(res => {
  //         setProfile(res.data);
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }, [user]);
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
      <StyledFormWrapper>
        <div style={{ height: "fit-content" }}>
          {mode === "login" ? (
            resetPassword ? (
              <UserResetPasswordForm onClose={onClose} />
            ) : (
              <CustomLoginForm
                onClose={onClose}
                openForgotPasswordModal={openForgotPasswordModal}
                redirectPath={locationPath}
              />
            )
          ) : (
            <CustomRegisterForm onClose={onClose} redirectPath={locationPath} />
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
            <a href="https://pulse-run-api.onrender.com/api/auth/google">
              {/* <GoogleSvg /> */}
              GOOGLE
            </a>

            <button>
              <FacebookSvg />
            </button>
          </SocialBox>
        </div>
      </StyledFormWrapper>
    </>
  );
};

export default ModalAuth;
