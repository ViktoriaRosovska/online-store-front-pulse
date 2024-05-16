import MediaQuery from "react-responsive";
import photoFounder from "../../assets/images/photoAboutUs.jpg";
import photoFounderMob from "../../assets/images/photoAboutUsMobile.jpg";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterItemText,
  FooterSection,
  FooterSectionColumn,
  FooterSectionAboutUs,
} from "./FooterPages.styled";

const FooterAboutUs = () => {
  return (
    <PageSection>
      <Container>
        <FooterPages>
          <MediaQuery maxWidth={1439.98}>
            <h3>Про нас</h3>
            <FooterSectionAboutUs>
              <img
                src={photoFounderMob}
                alt="Photo portrait of the founder"
                width="328"
                height="327"
              />

              <FooterItemText>
                Ласкаво просимо до RunPulse – мого улюбленого куточку для тих,
                хто розуміє важливість комфорту та стилю у спортивному взутті!
              </FooterItemText>
              <FooterItemText>
                Мене звати Оксана, і я є засновницею цього магазину. Як жінка та
                поціновувачка активного способу життя, я розумію, наскільки
                важливо мати вірного спутника на кожному кроці свого шляху. Сама
                знаю, як важливо мати взуття, яке не тільки підтримує, але і
                надихає до досягнень.
              </FooterItemText>
              <a>Розгорнути</a>
            </FooterSectionAboutUs>
          </MediaQuery>

          <MediaQuery minWidth={1440}>
            <h3>Про нас</h3>
            <FooterSection>
              <img
                src={photoFounder}
                alt="Photo portrait of the founder"
                width="347"
                height="327"
              />
              <FooterSectionColumn>
                <FooterItemText>
                  Ласкаво просимо до RunPulse – мого улюбленого куточку для тих,
                  хто розуміє важливість комфорту та стилю у спортивному взутті!
                </FooterItemText>
                <FooterItemText>
                  Мене звати Оксана, і я є засновницею цього магазину. Як жінка
                  та поціновувачка активного способу життя, я розумію, наскільки
                  важливо мати вірного спутника на кожному кроці свого шляху.
                  Сама знаю, як важливо мати взуття, яке не тільки підтримує,
                  але і надихає до досягнень.
                </FooterItemText>
                <a>Розгорнути</a>
              </FooterSectionColumn>
            </FooterSection>
          </MediaQuery>
        </FooterPages>
      </Container>
    </PageSection>
  );
};

export default FooterAboutUs;
