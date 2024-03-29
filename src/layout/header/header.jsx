import "./header.css";
import logoImg from "./../../../public/logo.svg";
import Menu from "./../menu/menu.jsx";
import SearchUserActions from "./search-user-actions/search-user-actions.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";

function Header({ modalOn }) {
  const [isFixed, setIsFixed] = useState(false);

  const navigate = useNavigate();
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
    <header className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="./">
            <img className={`logo__icon ${isFixed ? "fixed" : ""}`} src={logoImg} alt="PulseRun" onClick={homeClick} />
          </Link>
          <MediaQuery minWidth={1440}>
            <nav className="menu">
              <Menu />
            </nav>
          </MediaQuery>
          <SearchUserActions isFixed={isFixed} modalOn={modalOn} />
        </div>
      </div>
    </header>
  );
}

export default Header;
