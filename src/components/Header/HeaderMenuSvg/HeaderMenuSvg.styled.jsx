import styled from "styled-components";

export const Button = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${props =>
      props.$isFixed ? "var(--white-text-color)" : "var(--black-bg-color)"};
    stroke: ${props =>
      props.$isFixed ? "var(--white-text-color)" : "var(--black-bg-color)"};
  }
`;
