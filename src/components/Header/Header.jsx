import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import "./Header.css";
import logoImg from "/logo.svg?url";
import Menu from "../HeaderMenu/HeaderMenu.jsx";
import SearchUserActions from "./Search-user-actions/Search-user-actions.jsx";
import { Portal } from "../../components/Modals/helpersForModal/modalPortal";
import ModalBurgerMenu from "../../components/Modals/ModalBurgerMenu/ModalBurgerMenu";
import { Container } from "../../main.styled";
import HeaderMobileMenu from "./HeaderMobileMenu/HeaderMobileMenu";
import HeaderMenuSvg from "./HeaderMenuSvg/HeaderMenuSvg";

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
    console.log('close')
    setIsOpen(false);
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
              <HeaderMenuSvg
                isOpen={isOpen}
                onClose={handleCloseMenu}
                onOpen={handleOpenMenu}
                isFixed={location.pathname !== "/" || isFixed ? true : false}
              />

              <Portal isOpen={isOpen}>
                <ModalBurgerMenu onClose={handleCloseMenu}>
                  <HeaderMobileMenu onClose={handleCloseMenu} />
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
