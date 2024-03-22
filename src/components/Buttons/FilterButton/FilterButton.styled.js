import styled from "styled-components";

export const FilterButton = styled.button`
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  /* gap: 12px; */
  padding: 0;
  height: 26px;

  stroke: var(--black-text-color);
  & svg {
    margin-right: 12px;
  }
  &:hover {
    color: var(--grey-text-color);
    & svg {
      stroke: var(--grey-text-color);
    }
  }

  cursor: pointer;
`;
