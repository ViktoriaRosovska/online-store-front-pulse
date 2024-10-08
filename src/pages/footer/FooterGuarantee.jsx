import { Helmet } from "react-helmet";
import { Container, PageSection } from "../../main.styled";
import {
  FooterPages,
  FooterList,
  FooterItem,
  FooterListNoMarker,
  StyledSubHeader,
} from "./FooterPages.styled";
import { Title } from "components/Typography/Typography.styled";

const FooterGuarantee = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun Guarantee</title>
      </Helmet>
      <PageSection>
        <Container>
          {" "}
          <Title>Гарантія та повернення</Title>
          <FooterPages>
            <StyledSubHeader>1. Гарантія на товари</StyledSubHeader>
            <FooterListNoMarker>
              <FooterItem>
                Ми гарантуємо якість нашої продукції та надаємо гарантійні
                зобов&apos;язання відповідно до чинного законодавства.
                Гарантійний термін вказується на кожному товарі окремо. У разі
                виявлення дефектів, що виникли в результаті виробничого процесу,
                ми зобов&apos;язуємося замінити товар або повернути кошти.
              </FooterItem>
            </FooterListNoMarker>
            <StyledSubHeader>2. Повернення товару</StyledSubHeader>
            <FooterListNoMarker>
              <FooterItem>
                Якщо ви не задоволені придбаною продукцією з будь-яких причин,
                ми радо приймемо її назад протягом 30 днів з моменту придбання.
                Для повернення товару потрібно зберегти оригінальну упаковку та
                чек про придбання.
              </FooterItem>
            </FooterListNoMarker>
            <StyledSubHeader>3. Процедура повернення</StyledSubHeader>
            <FooterListNoMarker>
              <FooterItem>
                Для оформлення повернення, будь ласка, зв&apos;яжіться з нашим
                відділом обслуговування клієнтів за контактними даними,
                вказаними на нашому веб-сайті. Після розгляду вашого запиту ми
                зв&apos;яжемося з вами та надамо вказівки щодо процедури
                повернення.
              </FooterItem>
            </FooterListNoMarker>
            <StyledSubHeader>4. Умови повернення</StyledSubHeader>
            <FooterList>
              <FooterItem>
                Повернення приймається тільки у випадку, якщо товар не був
                вживаний та збережено всі етикетки та упаковку.
              </FooterItem>

              <FooterItem>
                Вартість повернення товару покриває клієнт, за винятком
                випадків, коли причиною повернення є фабричний дефект чи
                неправильна доставка.
              </FooterItem>

              <FooterItem>
                Грошове повернення здійснюється за допомогою того ж методу
                оплати, який ви використовували для замовлення.
              </FooterItem>
            </FooterList>
            <StyledSubHeader> 5. Винятки</StyledSubHeader>
            <FooterListNoMarker>
              <FooterItem>
                Деякі товари можуть бути виключені з політики повернення через
                гігієнічні або інші обставини. Це буде зазначено на сторінці
                товару. Ця політика повернення діє лише для товарів, придбаних у
                нашому онлайн магазині. Для товарів, куплених у роздрібних
                магазинах або інших місцях, будуть застосовуватися власні умови
                повернення.
              </FooterItem>
            </FooterListNoMarker>
          </FooterPages>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterGuarantee;
