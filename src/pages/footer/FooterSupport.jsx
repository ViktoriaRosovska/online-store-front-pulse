import { Container, PageSection } from "../../main.styled";
import UserSupportForm from "../../components/form/UserSupportForm/UserSupportForm";
import { useFetchCurrentUserQuery } from "../../redux/auth/userAuthApi";
import {
  FooterListNoBottom,
  FooterPages,
  FooterSectionSupport,
  FooterItemBottom,
  FooterItem,
  FooterSectionDiv,
  FooterSectionCenter,
  PhoneNumber,
  Link,
} from "./FooterPages.styled";
import { Helmet } from "react-helmet";
import { Title } from "components/Typography/Typography.styled";

const FooterSupport = () => {
  const { data } = useFetchCurrentUserQuery();
  const user = data?.user;

  return (
    <>
      <Helmet>
        <title>PulseRun Support</title>
      </Helmet>
      <PageSection>
        <Container>
          <Title>Підтримка</Title>
          <FooterPages>
            <FooterListNoBottom>
              <h4>Зв&apos;язатися з нами ви завжди можете за допомогою:</h4>
              <FooterSectionSupport>
                <FooterSectionDiv>
                  <FooterItem>
                    <FooterItemBottom>
                      контактних телефонів{" "}
                      <PhoneNumber href="tel:0800237556">
                        (0(800) 23 75 56
                      </PhoneNumber>
                      ,{" "}
                      <PhoneNumber href="tel:0442375568">
                        (044) 23 75 568)
                      </PhoneNumber>
                    </FooterItemBottom>
                  </FooterItem>
                  <FooterItem>
                    <FooterItemBottom>
                      надіслати свій запит/скаргу/пропозицію за допомогою такої
                      форми
                    </FooterItemBottom>
                  </FooterItem>
                </FooterSectionDiv>
                <FooterSectionDiv>
                  <FooterItem>
                    <FooterItemBottom>
                      написати нам на пошту{" "}
                      <Link href="mailto:pulseRun@gmail.com">
                        pulseRun@gmail.com
                      </Link>
                    </FooterItemBottom>
                  </FooterItem>
                  <FooterItem>
                    <FooterItemBottom>
                      чат-боту{" "}
                      <Link href="https://t.me/example_user">Telegram</Link>
                    </FooterItemBottom>
                  </FooterItem>
                </FooterSectionDiv>
              </FooterSectionSupport>
            </FooterListNoBottom>
            <FooterSectionCenter>
              {user ? <UserSupportForm user={user} /> : <UserSupportForm />}
            </FooterSectionCenter>
          </FooterPages>
        </Container>
      </PageSection>
    </>
  );
};

export default FooterSupport;
