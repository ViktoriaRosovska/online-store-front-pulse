import { useNavigate, useLocation } from "react-router";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { selectUserToken } from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";
import { useSelector } from "react-redux";
import { ReactComponent as BasketIcon } from "../../../../../assets/svg/basket_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../../../assets/svg/profile_icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../../../assets/svg/heart_lg.svg";
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
        className={`user__actions-profile user__actions-icon ${
          props.isFixed || !props.location ? "fixed" : ""
        }`}
        onClick={
          isLoggedIn
            ? navigateToCabinet
            : () => handleOpenLoginModal("/profile/account")
        }
      >
        <ProfileIcon />
      </button>
      <MediaQuery minWidth={1440}>
        <button
          className={`user__actions-favorites user__actions-icon ${
            props.isFixed || !props.location ? "fixed" : ""
          }`}
          onClick={
            isLoggedIn
              ? navigateToFavorites
              : () => handleOpenLoginModal("/profile/favorites")
          }
        >
          <FavoriteIcon />
        </button>
      </MediaQuery>
      <button
        className={`user__actions-cart user__actions-icon ${
          props.isFixed || !props.location ? "fixed" : ""
        }`}
        onClick={navigateToShopCart}
      >
        <BasketIcon />
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
