import { useNavigate, useLocation } from "react-router";
import profileIcon from "/public/icons/profile-icon.svg";
import favoritesIcon from "../../../../../assets/svg/favorites-icon.svg";
import cartIcon from "/public/icons/cart-icon.svg";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { selectUserToken } from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";
import { useSelector } from "react-redux";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";

function UserActions(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const [redirectPath, setRedirectPath] = useState("/profile/account");

  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useSelector(selectUserToken);

  const handleOpenLoginModal = redirectPath => {
    setRedirectPath(redirectPath);
    setIsLoginModalOpen(true);
    setIsForgotPasswordModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
    setIsLoginModalOpen(true);
  };

  console.log(!!isLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     toggleVisibility();
  //   }
  // }, [isLoggedIn]);

  // const toggleVisibility = () => {
  //   setIsVisible(prev => !prev);
  //   setIsLocked(prev => !prev);
  // };

  const navigateToCabinet = () => {
    navigate("/profile/account");
  };

  const navigateToFavorites = () => {
    navigate("/profile/favorites");
  };

  const navigateToShopCart = () => {
    navigate(ROUTES.SHOPCARTLAYOUT, { state: { from: location } });
  };
  return (
    <div className="user__actions">
      <button
        className="user__actions-profile"
        onClick={
          isLoggedIn
            ? navigateToCabinet
            : () => handleOpenLoginModal("/profile/account")
        }
      >
        <img
          className={`user__actions-icon ${
            props.isFixed || !props.location ? "fixed" : ""
          }`}
          src={profileIcon}
          alt=""
        />
      </button>
      <MediaQuery minWidth={1440}>
        <button
          className="user__actions-favorites"
          onClick={
            isLoggedIn
              ? navigateToFavorites
              : () => handleOpenLoginModal("/profile/favorites")
          }
        >
          <img
            className={`user__actions-icon ${
              props.isFixed || !props.location ? "fixed" : ""
            }`}
            src={favoritesIcon}
            alt=""
          />
        </button>
      </MediaQuery>
      <button className="user__actions-cart" onClick={navigateToShopCart}>
        <img
          className={`user__actions-icon ${
            props.isFixed || !props.location ? "fixed" : ""
          }`}
          src={cartIcon}
          alt=""
        />
      </button>

      <ParenModalForAuth
        isAuthModalOpen={isLoginModalOpen}
        closeAuthModal={handleCloseLoginModal}
        openForgotPasswordModal={openForgotPasswordModal}
        closeForgotPasswordModal={closeForgotPasswordModal}
        isForgotPasswordModalOpen={isForgotPasswordModalOpen}
        redirectPath={redirectPath}
      />
    </div>
  );
}
export default UserActions;
