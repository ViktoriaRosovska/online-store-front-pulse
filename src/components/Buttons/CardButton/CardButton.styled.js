import styled from "styled-components";

const CardButtonWrapper = styled.button`
  font-size: 18px;
  line-height: 20px;

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
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.01em;
  }
`;

export { CardButtonWrapper };
