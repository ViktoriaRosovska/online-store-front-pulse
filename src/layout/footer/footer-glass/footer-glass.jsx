import logoFooterImg from "/logo-footer.svg";
import FooterGlassInfo from "./footer-glass-info/footer-glass-info";
import Copyright from "../copyright/copyright";
import MediaQuery from "react-responsive";
import "./footer-glass.css";

function FooterGlass() {
  return (
    <div className="footer__glass">
      <div className="container">
        <div className="footer__glas-inner">
          <MediaQuery maxWidth={1439}>
            <div className="footer__glass-logo">
              <img src={logoFooterImg} alt="" />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <div className="footer__glass-logo">
              <img src={logoFooterImg} alt="" />
            </div>
          </MediaQuery>
          <FooterGlassInfo />
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default FooterGlass;
