import { useNavigate } from "react-router";
import profileIcon from "/public/icons/profile-icon.svg";
import favoritesIcon from "../../../../../assets/svg/favorites-icon.svg";
import cartIcon from "/public/icons/cart-icon.svg";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ReusableModal from "components/Modals/ReusableModal";
import useScrollLock from "components/Modals/helpersForModal/useScrollLock";
import ModalAuth from "components/Modals/ModalContent/ModalAuth";

function UserActions(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useScrollLock(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
    setIsLocked(prev => !prev);
  };

  const navigateToCabinet = () => {
    navigate("/account");
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
      <button className="user__actions-cart">
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
