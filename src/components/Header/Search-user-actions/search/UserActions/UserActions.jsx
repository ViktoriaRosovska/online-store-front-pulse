import { useNavigate, useLocation } from "react-router";
import profileIcon from "/public/icons/profile-icon.svg";
import favoritesIcon from "../../../../../assets/svg/favorites-icon.svg";
import cartIcon from "/public/icons/cart-icon.svg";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import ReusableModal from "components/Modals/ReusableModal";
// import useScrollLock from "components/Modals/helpersForModal/useScrollLock";
// import ModalAuth from "components/Modals/ModalContent/ModalAuth";
// import { useSelector } from "react-redux";
import {
  selectUserToken,
  // selectUserToken,
  // useFetchCurrentUserQuery
} from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";
// import { Portal } from "components/Modals/helpersForModal/modalPortal";
// import CommonModal from "components/Modals/CommonModal";
// import ModalAuth from "components/Modals/ModalAuth/ModalAuth";
import { useSelector } from "react-redux";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";

function UserActions(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
 const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)

  // const [isLocked, setIsLocked] = useScrollLock(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("UserActions  location", location.pathname)
  const isLoggedIn = useSelector(selectUserToken);
  // const { data } = useFetchCurrentUserQuery();
  // const isLoggedIn = data ? true : false

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsForgotPasswordModalOpen(false)
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(true)
        setIsLoginModalOpen(false)
    }

    const closeForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(false)
        setIsLoginModalOpen(true)
    }

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

  const navigateToShopCart = () => {
    navigate(ROUTES.SHOPCARTLAYOUT, { state: { from: location } });
  };
  return (
    <div className="user__actions">
      <button
        className="user__actions-profile"
        onClick={isLoggedIn ? navigateToCabinet : handleOpenLoginModal}
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
        <button className="user__actions-favorites">
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
      {/* <AnimatePresence>
        <ReusableModal
          onClose={toggleVisibility}
          locked={isLocked}
          isOpen={isVisible}
        >
          <ModalAuth />
        </ReusableModal>
      </AnimatePresence> */}
      <ParenModalForAuth isAuthModalOpen={isLoginModalOpen} closeAuthModal={handleCloseLoginModal} openForgotPasswordModal={openForgotPasswordModal} closeForgotPasswordModal={closeForgotPasswordModal} isForgotPasswordModalOpen={isForgotPasswordModalOpen} />
    </div>
  );
}
export default UserActions;
