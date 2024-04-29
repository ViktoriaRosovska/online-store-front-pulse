import { useNavigate, useLocation } from "react-router";
import profileIcon from "/public/icons/profile-icon.svg";
import favoritesIcon from "../../../../../assets/svg/favorites-icon.svg";
import cartIcon from "/public/icons/cart-icon.svg";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ReusableModal from "components/Modals/ReusableModal";
import useScrollLock from "components/Modals/helpersForModal/useScrollLock";
import ModalAuth from "components/Modals/ModalContent/ModalAuth";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";

function UserActions(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useScrollLock(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(selectUserToken);

  useEffect(() => {
    if (isLoggedIn) {
      toggleVisibility();
    }
  }, [isLoggedIn]);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
    setIsLocked(prev => !prev);
  };

  const navigateToCabinet = () => {
    navigate(ROUTES.ACCOUNT);
  };

  const navigateToShopCart = () => {
    navigate(ROUTES.SHOPCART, { state: { from: location } });
  };
  return (
    <div className="user__actions">
      <button
        className="user__actions-profile"
        onClick={isLoggedIn ? navigateToCabinet : toggleVisibility}
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
      <AnimatePresence>
        {isVisible && (
          <ReusableModal onClose={toggleVisibility} locked={isLocked}>
            <ModalAuth />
          </ReusableModal>
        )}
      </AnimatePresence>
    </div>
  );
}
export default UserActions;
