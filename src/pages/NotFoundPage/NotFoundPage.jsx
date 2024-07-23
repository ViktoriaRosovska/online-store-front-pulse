import { Container, PageSection } from "../../main.styled";
import NotFoundImg from "../../assets/images/404.png";
import {
  StyledNotFoundContent,
  StyledNotFoundText,
  StyledNotFoundWrapper,
} from "./NotFoundPage.styled";
import CardButton from "components/Buttons/CardButton/CardButton";
import { ROUTES } from "../../utils/routes";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <PageSection>
      <Container>
        <StyledNotFoundWrapper>
          <img src={NotFoundImg} alt="Not found page image" />
          <StyledNotFoundContent>
            <StyledNotFoundText>
              <p>На жаль, сторінку, яку ви шукаєте, не знайдено.</p>
              <p>Спробуйте заглянути на головну сторінку.</p>
            </StyledNotFoundText>
            <CardButton
              route={ROUTES.HOME}
              state={{ from: useLocation().pathname }}
              text="Головна сторінка"
            />
          </StyledNotFoundContent>
        </StyledNotFoundWrapper>
      </Container>
    </PageSection>
  );
};
export default NotFoundPage;
