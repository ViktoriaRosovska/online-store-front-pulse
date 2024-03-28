import "./footer-tittle.css";
import Input from "../../../components/input/input";
import Button from "../../../components/Buttons/button";
import Text from "../../../components/text/text";

function FooterTittle() {
  return (
    <div className="container">
      <div className="footer__inner">
        <div className="footer__tittle">
          <Text text="ПІДПИШИСЬ" className="main__tittle-text" />
          <Text text="Підпишись та отримай знижку -10 % за першу покупку" className="secondary__tittle-text" />
          <Input type="text" placeholder="Email" className="footer__tittle-input" />
          <Button btnText="Підписатися" btnType="submit" className="footer__tittle-btn" />
        </div>
      </div>
    </div>
  );
}

export default FooterTittle;
