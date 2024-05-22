import { Container, PageSection } from "../../main.styled";
import UserSupportForm from "../../components/form/UserSupportForm/UserSupportForm";
import {useFetchCurrentUserQuery} from "../../redux/auth/userAuthApi"
import {
  FooterListNoBottom,
  FooterPages,
  FooterSection,
  FooterItemBottom,
  FooterItem,
  FooterSectionDiv,
  FooterSectionCenter,
} from "./FooterPages.styled";

const FooterSupport = () => {
  const { data } = useFetchCurrentUserQuery();
  const user = data?.user;

  // console.log("user my", user);

  return (
    <PageSection>
      <Container>
        <FooterPages>
          <h3>Підтримка</h3>
          <FooterListNoBottom>
            <h4>Зв'язатися з нами ви завжди можете за допомогою:</h4>
            <FooterSection>
              <FooterSectionDiv>
                <FooterItem>
                  <FooterItemBottom>
                    контактних телефонів (0(800) 23 75 56, (044) 23 75 568)
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
                    написати нам на пошту pulseRun@gmail.com{" "}
                  </FooterItemBottom>
                </FooterItem>
                <FooterItem>
                  <FooterItemBottom>чат-боту Telegram</FooterItemBottom>
                </FooterItem>
              </FooterSectionDiv>
            </FooterSection>
          </FooterListNoBottom>
          <FooterSectionCenter>
           { user ? <UserSupportForm  
            user={user}  /> : <UserSupportForm  /> }
          </FooterSectionCenter>
        </FooterPages>
      </Container>
    </PageSection>
  );
};

export default FooterSupport;
