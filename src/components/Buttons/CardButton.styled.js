import styled from "styled-components";

const CardButtonWrapper = styled.button`
  font-family: "Roboto";
  letter-spacing: 0.01px;
  line-height: 30px;
  font-size: 20px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 32px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--white-dark-bg-color);
    color: black;
  }
`;

export { CardButtonWrapper };
