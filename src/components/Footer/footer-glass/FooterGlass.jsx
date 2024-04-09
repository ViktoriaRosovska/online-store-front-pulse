import logoFooterImg from "/public/logo-footer.svg";
import FooterGlassInfo from "./FooterGlassInfo/FooterGlassInfo";
import Copyright from "../Copyright/Copyright";
import "./FooterGlass.css";
import { Container } from "../../../main.styled";

function FooterGlass() {
  return (
    <div className="footer__glass">
      <Container>
        <div className="footer__glas-inner">
          <div className="footer__glass-logo">
            <img src={logoFooterImg} alt="" />
          </div>
          <FooterGlassInfo />
          <Copyright />
        </div>
      </Container>
    </div>
  );
}

export default FooterGlass;
