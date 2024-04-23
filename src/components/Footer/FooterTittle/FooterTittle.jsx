import "./FooterTittle.css";
import Button from "../../Buttons/Button";
import { Container } from "../../../main.styled";

function FooterTittle() {
  return (
    <Container>
      <div className="footer__inner">
        <div className="footer__tittle">
          <span className="main__tittle-text">ПІДПИШИСЬ</span>
          <span className="secondary__tittle-text">
            Підпишись та отримай знижку -10 % за першу покупку
          </span>
          <input
            type="text"
            placeholder="Email"
            className="footer__tittle-input"
          />
          <Button
            text="Підписатися"
            btnType="submit"
            className="footer__tittle-btn"
          />
        </div>
      </div>
    </Container>

    // </div>
  );
}

export default FooterTittle;
