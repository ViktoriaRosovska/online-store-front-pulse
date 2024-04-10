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
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01em;

  color: var(--white-text-color);
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export { SalePercentWrapper, SalePercentText };
