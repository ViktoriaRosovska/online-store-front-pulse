import logoFooterImg from "/logo-footer.svg";
import FooterGlassInfo from "./footer-glass-info/footer-glass-info";
import Copyright from "../copyright/copyright";
import "./footer-glass.css";

function FooterGlass() {
  return (
    <div className="footer__glass">
      <div className="container">
        <div className="footer__glas-inner">
          <div className="footer__glass-logo">
            <img src={logoFooterImg} alt="" />
          </div>
          <FooterGlassInfo />
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default FooterGlass;
