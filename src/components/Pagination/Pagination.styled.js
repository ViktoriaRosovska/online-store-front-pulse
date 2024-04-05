import styled from "styled-components";
import Button from "../Buttons/Button.jsx";

const PaginationBtn = styled(Button)`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--black-bg-color);
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    border-color: var(--pagination-notactive-color);
  }
`;

const PrevBtn = styled(PaginationBtn)``;
const NextBtn = styled(PaginationBtn)``;

export { PrevBtn, NextBtn, PaginationBtn };
