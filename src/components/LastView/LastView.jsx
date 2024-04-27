import ProductSlider from "components/Slider/ProductSlider";
import { StyledLastViewTitle, StyledLastViewWrapper } from "./LastView.styled";

export const LastView = () => {
  const data = JSON.parse(localStorage.getItem("lastView"));
  // console.log(data);
  return (
    <StyledLastViewWrapper>
      <StyledLastViewTitle>Недавно переглянуті</StyledLastViewTitle>
      <ProductSlider products={data} />
    </StyledLastViewWrapper>
  );
};
