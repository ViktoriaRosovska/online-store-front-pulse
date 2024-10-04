import { Helmet } from "react-helmet";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterListNoBottom,
  FooterItem,
  FooterListNoMarker,
  StyledConditionHeader,
  StyledSubHeader,
} from "./FooterPages.styled";

import { StyledLinks, Title } from "components/Typography/Typography.styled";

const FooterDelivery = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun Delivery</title>
      </Helmet>
      <PageSection>
        <Container>
          <Title>Доставка</Title>
          <FooterPages>
            <StyledConditionHeader>
              1. ЯКІ УМОВИ ДОСТАВКИ?
            </StyledConditionHeader>
            <StyledSubHeader>Зона доставки:</StyledSubHeader>
            <FooterListNoMarker>
              <FooterItem>Ми відправляємо товари по всій Україні*. </FooterItem>
              <FooterItem>
                * Ми тимчасово не доставляємо замовлення на окуповані території
                в Донецькій, Луганській, Херсонській, Запорізькій, Харківській
                областях і в Крим.
              </FooterItem>
            </FooterListNoMarker>
            <StyledSubHeader>Доступні варіанти доставки:</StyledSubHeader>
            <FooterListNoBottom>
              <FooterItem>У відділення &quot;Нова Пошта&quot;;</FooterItem>
              <FooterItem>У поштомат &quot;Нова Пошта&quot;;</FooterItem>
              <FooterItem>
                Кур&apos;єрська доставка за адресою.
                <p>
                  Відправлення здійснюється в день оформлення замовлення або
                  максимум наступного дня:
                </p>
              </FooterItem>
              <FooterItem>
                Доставка &quot;Новою Поштою&quot; становить до доби в межах
                Києва і до 2 днів по Україні.
              </FooterItem>
            </FooterListNoBottom>
            <StyledSubHeader>Відстеження доставки:</StyledSubHeader>
            <div>
              <p>
                Як тільки замовлення буде відвантажено, ми надішлемо тобі sms з
                номером замовлення у форматі AUA12345678 і ТТН, за яким його
                можна буде відстежити.
              </p>
              <p>
                Ти можеш відстежити статус замовлення на сайті кур&apos;єрської
                служби:
              </p>
              <FooterListNoBottom>
                <FooterItem>
                  Нова Пошта:{" "}
                  <StyledLinks
                    to="https://tracking.novaposhta.ua/#/uk"
                    target="_blank"
                    rel="noopener
                  norefferer"
                  >
                    https://tracking.novaposhta.ua/#/uk
                  </StyledLinks>
                </FooterItem>
              </FooterListNoBottom>
            </div>
            <StyledSubHeader>Термін зберігання замовлення:</StyledSubHeader>
            <FooterListNoBottom>
              <FooterItem>
                У відділенні &quot;Нова пошта&quot; – до 5 днів. Після
                закінчення 5 днів посилка автоматично повертається відправнику і
                не підлягає повторному відправленню.
              </FooterItem>
              <FooterItem>
                У поштоматі &quot;Нова пошта&quot; – до 3 днів. Якщо термін
                зберігання спливе, посилку перемістять у найближче відділення
                Нової пошти, щоб звільнити комірку поштомата.
              </FooterItem>
            </FooterListNoBottom>
            <StyledConditionHeader>
              2. СКІЛЬКИ КОШТУЄ ДОСТАВКА?
            </StyledConditionHeader>
            <FooterListNoMarker>
              <FooterItem>
                Ми доставимо безкоштовно по Україні будь-яке замовлення на суму
                від 4000 гривень.
              </FooterItem>

              <FooterItem>
                Вартість доставки розраховується на етапі оформлення замовлення
                на сайті.
              </FooterItem>
              <FooterItem>
                Вартість доставки у відділення кур&apos;єрської служби
                &quot;Нова Пошта&quot; — 79 грн.
              </FooterItem>
              <FooterItem>
                Вартість кур&apos;єрської доставки за адресою — 99 грн.
              </FooterItem>
              <FooterItem>
                Вартість доставки у поштомат &quot;Нова Пошта&quot; — 79 грн.
              </FooterItem>
              <FooterItem>
                Якщо вказана післяплата (готівкою або банківською карткою при
                отриманні), то необхідно буде сплатити комісію за переказ
                грошових коштів — 20 грн + 2% від суми замовлення;
              </FooterItem>
              <FooterItem>
                Щоб уникнути цього платежу, рекомендуємо оплатити замовлення
                карткою на сайті.
              </FooterItem>
              <FooterItem>
                Зверни увагу, що кур&apos;єрська доставка оплачується незалежно
                від того, викупив ти замовлення або відмовився від нього.
              </FooterItem>
              <FooterItem>
                Кожне нове замовлення оплачується окремо, в тому числі при
                одночаснiй доставцi.
              </FooterItem>
            </FooterListNoMarker>
          </FooterPages>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterDelivery;
