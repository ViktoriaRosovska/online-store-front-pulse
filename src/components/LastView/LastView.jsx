import ProductSlider from "components/Slider/ProductSlider";
import { StyledLastViewTitle, StyledLastViewWrapper } from "./LastView.styled";
import { Container } from "../../main.styled";

export const LastView = () => {
  const data = JSON.parse(localStorage.getItem("lastView"));
  // console.log(data);
  return data?.length > 0 ? (
    <StyledLastViewWrapper>
      <Container>
        <StyledLastViewTitle>Недавно переглянуті</StyledLastViewTitle>
        <ProductSlider products={data} />
      </Container>
    </StyledLastViewWrapper>
  ) : null;
};
