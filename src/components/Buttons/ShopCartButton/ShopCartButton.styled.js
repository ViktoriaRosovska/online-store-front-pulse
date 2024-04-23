import styled from "styled-components";
import Button from "../Button";

const StyledShopCartButton = styled(Button)`
  font-family: "Roboto";
  font-size: 20px;
  line-height: 28px;
  background-color: var(--black-bg-color);
  color: var(--white-text-color);
  padding: 10px 0;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 16px;
  &:hover,
  &:focus {
    background-color: transparent;
    border: 1px solid var(--black-bg-color);
    color: var(--white-text-color);
    color: var(--black-text-color);
  }
  @media screen and (min-width: 1440px) {
    padding: 17px 0;
  }
`;
const StyledShopCartWhiteButton = styled(StyledShopCartButton)`
  border: 1px solid var(--black-bg-color);
  color: var(--black-text-color);
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: var(--black-bg-color);
    color: var(--white-text-color);
  }
`;

export { StyledShopCartButton, StyledShopCartWhiteButton };
