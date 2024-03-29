import "./footer-tittle.css";
import Button from "../../../components/Buttons/button";

function FooterTittle() {
  return (
    <div className="container">
      <div className="footer__inner">
        <div className="footer__tittle">
          <span className="main__tittle-text">ПІДПИШИСЬ</span>
          <span className="secondary__tittle-text">Підпишись та отримай знижку -10 % за першу покупку</span>
          <input type="text" placeholder="Email" className="footer__tittle-input" />
          <Button btnText="Підписатися" btnType="submit" className="footer__tittle-btn" />
        </div>
      </div>
    </div>
  );
}

export default FooterTittle;
