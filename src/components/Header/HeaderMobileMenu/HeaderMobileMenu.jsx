import { useState } from "react";
import ProfileMenu from "../../../components/UserAccount/ProfileMenu/ProfileMenu";
import Menu from "../../HeaderMenu/HeaderMenu.jsx";
import { Button, FooterMenuList } from "./HeaderMobileMenu.styled";
import { ReactComponent as UpSvg } from "../../../assets/svg/up.svg";
import { ReactComponent as DownSvg } from "../../../assets/svg/down.svg";
import mobileFooterMenu from "../../../data/mobileFooterMenu.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../../redux/auth";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";

const HeaderMobileMenu = ({ onClose }) => {
  const isLoggedIn = useSelector(selectUserToken);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const handleOpenLoginModal = () => {
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

  const arrowSvg = isProfileMenuOpen ? <DownSvg /> :<UpSvg /> ;
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  return (
    <>
      <Menu onClose={onClose} />
      <Button
        type="button"
        onClick={isLoggedIn ? toggleProfileMenu : handleOpenLoginModal}
      >
        Профіль {isLoggedIn && <span>{arrowSvg}</span>}
      </Button>
      {isProfileMenuOpen && isLoggedIn ? (
        <ProfileMenu onClose={onClose} isProfile />
      ) : (
        <ParenModalForAuth
          isAuthModalOpen={isLoginModalOpen}
          closeAuthModal={handleCloseLoginModal}
            openForgotPasswordModal={openForgotPasswordModal}
            openLoginModal={handleOpenLoginModal}
          closeForgotPasswordModal={closeForgotPasswordModal}
          isForgotPasswordModalOpen={isForgotPasswordModalOpen}
        />
      )}
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#7A7C7F",
          marginTop: isProfileMenuOpen ? "0" : "16px",
        }}
      />
      <nav>
        <FooterMenuList>
          {mobileFooterMenu.map((item, itemIndex) => (
            <li key={itemIndex} onClick={onClose}>
              <Link to={item.href}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </FooterMenuList>
      </nav>
    </>
  );
};

export default HeaderMobileMenu;
