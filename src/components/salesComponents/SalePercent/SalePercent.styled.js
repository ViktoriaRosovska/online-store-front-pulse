import styled from "styled-components";

const SalePercentWrapper = styled.div`
  padding: 0.5px 10px;
  border-radius: 4px;
  background-color: var(--red-light-color);
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const SalePercentText = styled.span`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: var(--white-text-color);
`;

export { SalePercentWrapper, SalePercentText };
