import { Link, useLocation } from "react-router-dom";
import logoFooterImg from "/public/logo-footer.svg";
import FooterGlassInfo from "./FooterGlassInfo/FooterGlassInfo";
import Copyright from "../Copyright/Copyright";
import { Container } from "../../../main.styled";
import { FooterBox } from "./FooterGlass.styled";

function FooterGlass() {
  const location = useLocation();

  const handleLinkClick = e => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <FooterBox>
      <Container>
        <Link to="/" onClick={e => handleLinkClick(e)}>
          <img src={logoFooterImg} alt="" />
        </Link>
        <FooterGlassInfo />
        <Copyright />
      </Container>
    </FooterBox>
  );
}

export default FooterGlass;
