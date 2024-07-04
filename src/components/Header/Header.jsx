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
import {
  MobileInput,
  SearchMobileBox,
  Box,
  MobileSearchIcon,
} from "./Search-user-actions/search/Search.styled";
import { ReactComponent as CloseSearcSvg } from "../../assets/svg/close-mobile-search.svg";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    const savedQuery = localStorage.getItem("searchQuery");
    return window.location.pathname.includes("/search") ? savedQuery : "";
  });

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

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      setSearchQuery("");
      localStorage.removeItem("searchQuery");
    }
  }, [location]);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMobileSearch = () => {
    setIsActive(true);
  };

  const handleCloseMobileSearch = () => {
    setIsActive(false);
  };

  const handleSearchInputChange = query => {
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleDeleteSearchQuery = () => {
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
  };

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
    handleCloseMobileSearch();
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleSearch();
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
              <HeaderMenuSvg
                isOpen={isOpen}
                onClose={handleCloseMenu}
                onOpen={handleOpenMenu}
                isFixed={location.pathname !== "/" || isFixed ? true : false}
              />

              <Portal isOpen={isOpen} burgerModal={true}>
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
            <nav>
              <Menu />
            </nav>
          </MediaQuery>
          <SearchUserActions
            openSearch={handleOpenMobileSearch}
            isFixed={isFixed}
            location={location.pathname === "/"}
            searchQuery={searchQuery}
            onSearchInputChange={handleSearchInputChange}
            isActive={isActive}
            closeSearch={handleCloseMobileSearch}
          />
        </div>
      </Container>
      <MediaQuery maxWidth={1439}>
        {isActive && (
          <SearchMobileBox>
            <Box>
              <MobileSearchIcon onClick={handleSearch} />
              <MobileInput
                placeholder="Пошук"
                value={searchQuery}
                onChange={e => handleSearchInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {searchQuery && (
                <CloseSearcSvg onClick={handleDeleteSearchQuery} />
              )}
            </Box>
          </SearchMobileBox>
        )}
      </MediaQuery>
    </header>
  );
}
export default Header;
