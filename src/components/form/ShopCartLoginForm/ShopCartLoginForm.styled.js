import styled from "styled-components";

const StyledLoginFormButton = styled.button`
  font-family: "Roboto";
  font-size: 18px;
  line-height: 20px;

  background-color: var(--black-bg-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: ${props => (props.$bannerWidth ? "227px" : "100%")};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--white-dark-bg-color);
    color: black;
  }
  &:disabled {
    background-color: lightgray;
    cursor: white;
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.01em;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export { StyledLoginFormButton };
