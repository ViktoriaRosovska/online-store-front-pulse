import { Helmet } from "react-helmet";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterListNoMarker,
  FooterItem,
  HighlightedWord,
  StyledPolicyLink,
} from "./FooterPages.styled";
import { Title } from "components/Typography/Typography.styled";

const FooterPrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun PrivacyPolicy</title>
      </Helmet>
      <PageSection>
        <Container>
          <Title>Політика конфіденційності</Title>
          <FooterPages>
            <FooterListNoMarker>
              <FooterItem>
                Дякуємо за використання нашого веб-сайту. Наша політика
                конфіденційності пояснює, як ми збираємо, використовуємо та
                захищаємо вашу інформацію при відвідуванні та використанні
                нашого сайту.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4>Збір і використання інформації:</h4>
              <FooterItem>
                Ми збираємо різноманітну інформацію, щоб забезпечити краще
                обслуговування наших клієнтів та покращити функціональність
                нашого сайту. Інформація, яку ми збираємо, може включати
                особисту інформацію, таку як ім&apos;я, адреса електронної
                пошти, номер телефону тощо, яку ви нам надаєте добровільно при
                реєстрації або під час оформлення замовлення. Ми можемо
                використовувати вашу особисту інформацію для зв&apos;язку з вами
                стосовно вашого замовлення, повідомлення вас про акції та
                спеціальні пропозиції, а також для поліпшення нашого
                обслуговування та асортименту товарів.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4>Захист інформації:</h4>
              <FooterItem>
                Ми приділяємо велику увагу безпеці вашої особистої інформації і
                вживаємо відповідних заходів безпеки для її захисту від
                несанкціонованого доступу, втрати, зловживання та розголошення.
                Ми не розголошуємо вашу особисту інформацію третім особам без
                вашого згоди, за винятком випадків, передбачених законом.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4>Cookies:</h4>
              <FooterItem>
                Наш веб-сайт може використовувати cookies для збору інформації
                та поліпшення користувацького досвіду. Cookies є невеликими
                текстовими файлами, які можуть бути збережені на вашому
                пристрої, коли ви відвідуєте веб-сайт. Ви можете налаштувати
                свій веб-браузер відхиляти всі cookies або попереджати про їх
                відправлення. Проте, відмова від використання cookies може
                призвести до обмеження деяких функцій нашого веб-сайту.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4> Посилання на інші сайти:</h4>
              <FooterItem>
                Наш веб-сайт може містити посилання на інші сайти, які не
                контролюються нами. Ми не несемо відповідальності за політику
                конфіденційності або вміст таких сайтів.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4>Зміни у політиці конфіденційності:</h4>
              <FooterItem>
                Ми можемо час від часу оновлювати нашу політику
                конфіденційності. Будь ласка, періодично переглядайте цю
                сторінку, щоб бути в курсі будь-яких змін.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoMarker>
              <h4>Контактна інформація:</h4>
              <FooterItem>
                Якщо у вас виникли питання щодо нашої політики конфіденційності,
                будь ласка, зв&apos;яжіться з нами за телефоном&nbsp;
                <StyledPolicyLink href="tel:0800237556">
                  <HighlightedWord>0(800) 23 75 56</HighlightedWord>
                </StyledPolicyLink>
                <HighlightedWord>,&nbsp;</HighlightedWord>
                <StyledPolicyLink href="tel:+3800442375568">
                  <HighlightedWord>(044) 23 75 568</HighlightedWord>&nbsp;
                </StyledPolicyLink>
                або напишіть на пошту&nbsp;
                <StyledPolicyLink href="mailto:pulseRun@gmail.com">
                  <HighlightedWord>pulseRun@gmail.com</HighlightedWord>
                </StyledPolicyLink>
              </FooterItem>
            </FooterListNoMarker>
          </FooterPages>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterPrivacyPolicy;
