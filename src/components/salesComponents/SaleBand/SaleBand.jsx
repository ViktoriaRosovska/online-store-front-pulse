import { SaleText, SaleWrapper } from "./SaleBand.styled";

export const SaleBand = props => {
  return (
    <SaleWrapper $background={props.$background}>
      <SaleText color={props.color}>{props.text}</SaleText>
    </SaleWrapper>
  );
};
