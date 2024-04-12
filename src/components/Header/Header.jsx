import "./Header.css";
import logoImg from "/logo.svg?url";
import Menu from "../HeaderMenu/HeaderMenu.jsx";
import SearchUserActions from "./Search-user-actions/Search-user-actions.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation().pathname === "/";
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

  return (
    <header className={`header ${!location || isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="./">
            <img
              className={`logo__icon ${!location || isFixed ? "fixed" : ""}`}
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
          <SearchUserActions isFixed={isFixed} location={location} />
        </div>
      </div>
    </header>
  );
}

export default Header;
