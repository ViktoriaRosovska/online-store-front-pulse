import styled from "styled-components";
import Button from "../Buttons/Button.jsx";

const PaginationBtn = styled(Button)`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--black-bg-color);
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    fill: var(--black-bg-color);
  }
  &:hover,
  &:focus,
  &:active {
    border-color: var(--pagination-notactive-color);
    & svg {
      fill: var(--pagination-notactive-color);
    }
  }
`;

const PrevBtn = styled(PaginationBtn)``;
const NextBtn = styled(PaginationBtn)``;

export { PrevBtn, NextBtn, PaginationBtn };
