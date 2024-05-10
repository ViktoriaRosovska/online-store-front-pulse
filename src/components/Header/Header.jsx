import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import "./Header.css";
import logoImg from "/logo.svg?url";
import Menu from "../HeaderMenu/HeaderMenu.jsx";
import SearchUserActions from "./Search-user-actions/Search-user-actions.jsx";
import ProfileMenu from "../UserAccount/ProfileMenu/ProfileMenu";
import { Portal } from "../../components/Modals/helpersForModal/modalPortal";
import ModalBurgerMenu from "../../components/Modals/ModalBurgerMenu/ModalBurgerMenu";
import { Container } from "../../main.styled";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const homeClick = () => {
    navigate("./");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const getMenuItems = () => {
    if (location.pathname === "/") {
      return <Menu />;
    } else if (
      location.pathname === "/profile/account" ||
      location.pathname === "/profile/orderhistory" ||
      location.pathname === "/profile/favorites" ||
      location.pathname === "/profile/wallet" ||
      location.pathname === "/profile/support"
    ) {
      return <ProfileMenu onClose={handleCloseMenu} isProfile />;
    }
  };

  return (
    <header
      className={`header ${
        location.pathname !== "/" || isFixed ? "fixed" : ""
      }`}
    >
      <Container>
        <div className="header__inner">
          <MediaQuery maxWidth={1440}>
            <div>
              {!isOpen && (
                <button onClick={handleOpenMenu}>
                  <svg width={26} height={26}>
                    <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-menu"></use>
                  </svg>
                </button>
              )}

              <Portal isOpen={isOpen}>
                <ModalBurgerMenu onClose={handleCloseMenu}>
                  {getMenuItems()}
                </ModalBurgerMenu>
              </Portal>
            </div>
          </MediaQuery>
          <Link className="logo" to="./">
            <img
              className={`logo__icon ${
                location.pathname !== "/" || isFixed ? "fixed" : ""
              }`}
              src={logoImg}
              alt="PulseRun"
              onClick={homeClick}
            />
          </Link>
          <MediaQuery minWidth={1440}>
            <nav className="menu">
              <Menu />
            </nav>
          </MediaQuery>
          <SearchUserActions
            isFixed={isFixed}
            location={location.pathname === "/"}
          />
        </div>
      </Container>
    </header>
  );
}
export default Header;
