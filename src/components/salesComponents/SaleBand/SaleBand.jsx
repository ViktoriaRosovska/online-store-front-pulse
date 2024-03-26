import { SaleText, SaleWrapper } from "./SaleBand.styled";

export const SaleBand = (props) => {
  return (
    <SaleWrapper>
      <SaleText>{props.text}</SaleText>
    </SaleWrapper>
  );
};
