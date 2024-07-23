import styled from "styled-components";

export const CommonButton = styled("button")`
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;

  font-size: 20px;
  line-height: 1.5;
  color: #e9e9e9;

  background-color: #292929;
  border-radius: 16px;

  transition: all 300ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--white-dark-bg-color);
    color: var(--black-text-color);
  }

  &:disabled {
    cursor: auto;
    background-color: var(--white-dark-bg-color);
    color: var(--grey-text-color);
  }
`;
