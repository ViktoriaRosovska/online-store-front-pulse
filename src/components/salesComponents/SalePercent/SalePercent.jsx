import { SalePercentText, SalePercentWrapper } from "./SalePercent.styled";

export const SalePercent = (props) => {
  return (
    <SalePercentWrapper>
      <SalePercentText>{props.text}%</SalePercentText>
    </SalePercentWrapper>
  );
};
