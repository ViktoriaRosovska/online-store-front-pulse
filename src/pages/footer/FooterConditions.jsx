import { Helmet } from "react-helmet";
import { Container, PageSection } from "../../main.styled";
import { FooterList, FooterItem } from "./FooterPages.styled";
import { Title } from "components/Typography/Typography.styled";

const FooterConditions = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun Conditions</title>
      </Helmet>
      <PageSection>
        <Container>
          <Title>Умови та положення</Title>
          <div>
            <FooterList>
              <h4>1.Опис продукції</h4>
              <FooterItem>
                Ми надаємо детальну інформацію про всі продукти, включаючи
                розміри, кольори, матеріали та інші характеристики. Проте, ми не
                гарантуємо точність відтінків через індивідуальні налаштування
                моніторів користувачів.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>2. Ціни та оплата</h4>
              <FooterItem>
                Ціни на сайті можуть змінюватися без попереднього повідомлення.
                Усі ціни вказані в національній валюті та включають податки, де
                це необхідно.
              </FooterItem>
              <FooterItem>
                Ми приймаємо оплату через кредитні картки Visa та MasterCard, а
                також здійснюємо відправлення з післяплатою за тарифами
                &quot;Нової пошти&quot;
              </FooterItem>
            </FooterList>

            <FooterList>
              <h4>3. Доставка </h4>
              <FooterItem>
                Ми здійснюємо доставку на територію України за допомогою
                надійних служб доставки. Терміни та вартість доставки можуть
                варіюватися залежно від місця призначення та обраного способу
                доставки.
              </FooterItem>
            </FooterList>

            <FooterList>
              <h4>4. Повернення та обмін</h4>
              <FooterItem>
                Ми приймаємо повернення або обмін товару протягом 30 днів з
                моменту покупки. Товар повинен бути в оригінальній упаковці та у
                належному стані.
              </FooterItem>
              <FooterItem>
                Вартість повернення товару несе покупець, за винятком випадків
                фабричного дефекту чи неправильної доставки.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>5. Конфіденційність та безпека</h4>
              <FooterItem>
                Ми зобов&apos;язуємося зберігати особисту інформацію наших
                клієнтів конфіденційно та не передавати її третім особам без
                вашої письмової згоди.
              </FooterItem>
              <FooterItem>
                Ми використовуємо файли cookies для збору інформації про
                користувачів нашого сайту з метою поліпшення сервісу та
                персоналізації рекламних пропозицій.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>6. Права та обов&apos;язки </h4>
              <FooterItem>
                Ми залишаємо за собою право відмовити у обслуговуванні
                будь-якого клієнта у разі порушення умов користування.{" "}
              </FooterItem>
              <FooterItem>
                Клієнти також зобов&apos;язані дотримуватися умов користування
                та правил поведінки на сайті.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>7. Інтелектуальна власність</h4>
              <FooterItem>
                Весь контент нашого сайту, включаючи тексти, зображення та
                логотипи, захищений авторським правом і торговою маркою та не
                може бути використаний без нашої письмової згоди.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>8. Юрисдикція та судові суперечки</h4>
              <FooterItem>
                У випадку судових суперечок, сторони зобов&apos;язуються
                вирішувати їх мирним шляхом.
              </FooterItem>
            </FooterList>
            <FooterList>
              <h4>9. Загальні положення </h4>
              <FooterItem>
                Ці умови та положення становлять юридичну угоду між вами та
                нами, що регулює ваш доступ та використання нашого сайту та
                послуг.
              </FooterItem>
            </FooterList>
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterConditions;
