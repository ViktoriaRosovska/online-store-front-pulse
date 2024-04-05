import FooterTittle from "./FooterTittle/FooterTittle.jsx";
import FooterGlass from "./footer-glass/FooterGlass.jsx";

import { FooterSection } from "./Footer.styled.js";

function Footer() {
  return (
    <FooterSection>
      <FooterTittle />
      <FooterGlass />
    </FooterSection>
  );
}

export default Footer;
