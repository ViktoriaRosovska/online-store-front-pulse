import styled from "styled-components";

const SaleWrapper = styled.div`
  height: 32px;
  background-color: ${(props) => props.$background};
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 13px;
`;
const SaleText = styled.span`
  font-family: "Roboto";
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
`;
export { SaleWrapper, SaleText };
