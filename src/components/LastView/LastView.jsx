import ProductSlider from "components/Slider/ProductSlider";
import { StyledLastViewTitle, StyledLastViewWrapper } from "./LastView.styled";
import { Container } from "../../main.styled";

export const LastView = ({ lastViewData }) => {
  return (
    <StyledLastViewWrapper>
      <Container>
        <StyledLastViewTitle>Недавно переглянуті</StyledLastViewTitle>
        <ProductSlider products={lastViewData} />
      </Container>
    </StyledLastViewWrapper>
  );
};
