import { Helmet } from "react-helmet";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterListNoBottom,
  FooterItem,
  FooterListNoMarker,
} from "./FooterPages.styled";

import { StyledLinks } from "components/Typography/Typography.styled";

const FooterDelivery = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun Delivery</title>
      </Helmet>
      <PageSection>
        <Container>
          <FooterPages>
            <h3>Доставка</h3>
            <FooterListNoMarker>
              <h4>1. ЯКІ УМОВИ ДОСТАВКИ?</h4>
              <h4>Зона доставки:</h4>
              <FooterItem>Ми відправляємо товари по всій Україні*. </FooterItem>
              <FooterItem>
                * Ми тимчасово не доставляємо замовлення на окуповані території
                в Донецькій, Луганській, Херсонській, Запорізькій, Харківській
                областях і в Крим.
              </FooterItem>
            </FooterListNoMarker>

            <FooterListNoBottom>
              <h4>Доступні варіанти доставки:</h4>
              <FooterItem>У відділення Нова Пошта;</FooterItem>
              <FooterItem>У поштомат “Нова Пошта”;</FooterItem>
              <FooterItem>
                Кур&apos;єрська доставка за адресою.
                <p>
                  Відправлення здійснюється в день оформлення замовлення або
                  максимум наступного дня:
                </p>
              </FooterItem>
              <FooterItem>
                Доставка Новою Поштою становить до доби в межах Києва і до 2
                днів по Україні.
              </FooterItem>
            </FooterListNoBottom>

            <FooterListNoBottom>
              <h4>Відстеження доставки:</h4>
              <p>
                Як тільки замовлення буде відвантажено, ми надішлемо тобі sms з
                номером замовлення у форматі AUA12345678 і ТТН, за яким його
                можна буде відстежити.
              </p>
              <p>
                Ти можеш відстежити статус замовлення на сайті кур&apos;єрської
                служби:
              </p>
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

            <FooterListNoBottom>
              <h4>Термін зберігання замовлення:</h4>
              <FooterItem>
                У відділенні “Нова пошта” – до 5 днів. Після закінчення 5 днів
                посилка автоматично повертається відправнику і не підлягає
                повторному відправленню.
              </FooterItem>
              <FooterItem>
                У поштоматі “Нова пошта” – до 3 днів. Якщо термін зберігання
                спливе, посилку перемістять у найближче відділення Нової пошти,
                щоб звільнити комірку поштомата.
              </FooterItem>
            </FooterListNoBottom>

            <FooterListNoMarker>
              <h4>СКІЛЬКИ КОШТУЄ ДОСТАВКА?</h4>
              <FooterItem>
                {" "}
                Ми доставимо безкоштовно по Україні будь-яке замовлення на суму
                від 2500 гривень.
              </FooterItem>

              <FooterItem>
                Вартість доставки розраховується на етапі оформлення замовлення
                на сайті.
              </FooterItem>
              <FooterItem>
                Вартість доставки у відділення кур'єрської служби "Нова Пошта" —
                79 грн.{" "}
              </FooterItem>
              <FooterItem>
                Вартість кур'єрської доставки за адресою — 99 грн.{" "}
              </FooterItem>
              <FooterItem>
                Вартість доставки у поштомат "Нова Пошта" — 79 грн.{" "}
              </FooterItem>
              <FooterItem>
                Якщо вказана післяплата (готівкою або банківською карткою при
                отриманні), то необхідно буде сплатити комісію за переказ
                грошових коштів — 20 грн + 2% від суми замовлення;
              </FooterItem>
              <FooterItem>
                Щоб уникнути цього платежу, рекомендуємо оплатити замовлення
                карткою на сайті.{" "}
              </FooterItem>
              <FooterItem>
                Зверни увагу, що кур'єрська доставка оплачується незалежно від
                того, викупив ти замовлення або відмовився від нього.{" "}
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
