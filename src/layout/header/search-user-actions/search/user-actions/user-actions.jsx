import profileIcon from "./../../../../../../public/icons/profile-icon.svg";
import favoritesIcon from "./../../../../../../public/icons/favorites-icon.svg";
import cartIcon from "./../../../../../../public/icons/cart-icon.svg";
import "./user-actions.css";
import MediaQuery from "react-responsive";

function UserActions(props) {
  return (
    <div className="user__actions">
      <button className="user__actions-profile" onClick={() => props.modalOn()}>
        <img
          className={`user__actions-icon ${props.isFixed ? "fixed" : ""}`}
          src={profileIcon}
          alt=""
        />
      </button>
      <MediaQuery minWidth={1440}>
        <button className="user__actions-favorites">
          <img
            className={`user__actions-icon ${props.isFixed ? "fixed" : ""}`}
            src={favoritesIcon}
            alt=""
          />
        </button>
      </MediaQuery>
      <button className="user__actions-cart">
        <img
          className={`user__actions-icon ${props.isFixed ? "fixed" : ""}`}
          src={cartIcon}
          alt=""
        />
      </button>
    </div>
  );
}

export default UserActions;
