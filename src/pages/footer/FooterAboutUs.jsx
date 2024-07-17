import MediaQuery from "react-responsive";
import photoFounder from "../../assets/images/photoAboutUs.jpg";
import photoFounderMob from "../../assets/images/photoAboutUsMobile.jpg";
import DetailsTogglerSecond from "components/UIKit/DetailsTogglerSecond/DetailsTogglerSecond";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterItemText,
  FooterItemBottom,
  FooterSection,
  FooterSectionColumn,
} from "./FooterPages.styled";
import { Helmet } from "react-helmet";
import { Title } from "components/Typography/Typography.styled";

const FooterAboutUs = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun AboutUs</title>
      </Helmet>
      <PageSection>
        <Container>
          <Title>Про нас</Title>
          <FooterPages>
            <MediaQuery maxWidth={1439.98}>
              <FooterSectionColumn>
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
                  <FooterItemBottom>
                    Мене звати Оксана, і я є засновницею цього магазину. Як
                    жінка та поціновувачка активного способу життя, я розумію,
                    наскільки важливо мати вірного спутника на кожному кроці
                    свого шляху. Сама знаю, як важливо мати взуття, яке не
                    тільки підтримує, але і надихає до досягнень.
                  </FooterItemBottom>
                </FooterItemText>

                <DetailsTogglerSecond>
                  <FooterItemText>
                    &quot;У RunPulse ми пропонуємо вам великий вибір брендового
                    та класичного спортивного взуття. Ми віримо, що правильний
                    вибір взуття може зробити ваші тренування більш ефективними
                    та приємними. Кожна пара, яку ми обираємо для нашого
                    магазину, проходить відбір за якістю та стилем, щоб ви могли
                    бути впевнені в своєму виборі. Моя команда та я прагнемо
                    зробити ваші покупки максимально приємними та зручними.
                    Будьте впевнені, що кожна пара взуття від RunPulse
                    призначена для того, щоб допомагати вам досягати нових висот
                    у спорті. Дякую, що обрали RunPulse – ваш партнер у кожному
                    спортивному досягненні!&quot;
                  </FooterItemText>
                </DetailsTogglerSecond>
              </FooterSectionColumn>
            </MediaQuery>

            <MediaQuery minWidth={1440}>
              <FooterSection>
                <img
                  src={photoFounder}
                  alt="Photo portrait of the founder"
                  width="347"
                  height="327"
                />
                <FooterSectionColumn>
                  <FooterItemText>
                    Ласкаво просимо до RunPulse – мого улюбленого куточка для
                    тих, хто розуміє важливість комфорту та стилю у спортивному
                    взутті!
                  </FooterItemText>
                  <FooterItemText>
                    <FooterItemBottom>
                      Мене звати Оксана, і я є засновницею цього магазину. Як
                      жінка та поціновувачка активного способу життя, я розумію,
                      наскільки важливо мати вірного супутника на кожному кроці
                      свого шляху. Сама знаю, як важливо мати взуття, яке не
                      тільки підтримує, але і надихає до досягнень.
                    </FooterItemBottom>
                  </FooterItemText>

                  <DetailsTogglerSecond>
                    <FooterItemText>
                      &quot;У RunPulse ми пропонуємо вам великий вибір
                      брендового та класичного спортивного взуття. Ми віримо, що
                      правильний вибір взуття може зробити ваші тренування більш
                      ефективними та приємними. Кожна пара, яку ми обираємо для
                      нашого магазину, проходить відбір за якістю та стилем, щоб
                      ви могли бути впевнені в своєму виборі. Моя команда та я
                      прагнемо зробити ваші покупки максимально приємними та
                      зручними. Будьте впевнені, що кожна пара взуття від
                      RunPulse призначена для того, щоб допомагати вам досягати
                      нових висот у спорті. Дякую, що обрали RunPulse – ваш
                      партнер у кожному спортивному досягненні!&quot;
                    </FooterItemText>
                  </DetailsTogglerSecond>
                </FooterSectionColumn>
              </FooterSection>
            </MediaQuery>
          </FooterPages>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterAboutUs;
