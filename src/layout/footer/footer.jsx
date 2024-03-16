import FooterTittle from "./footer-tittle/footer-tittle.jsx";
import FooterGlass from "./footer-glass/footer-glass.jsx";

import { FooterContainer } from "./Footer.styled.js";

function Footer() {
  return (
    <footer>
      <FooterContainer>
      <FooterTittle />
      <FooterGlass />
      </FooterContainer>
    </footer>
  );
}

export default Footer;
