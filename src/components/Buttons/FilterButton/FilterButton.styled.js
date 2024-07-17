import styled from "styled-components";

const FilterButton = styled.button`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  height: 26px;
  stroke: var(--black-text-color);
  & svg {
    margin-right: 12px;
  }
  &:hover,
  &:focus,
  &:active {
    color: var(--grey-text-color);
    & svg {
      stroke: var(--grey-text-color);
    }
  }

  cursor: pointer;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    cursor: ${props => (props.$hasFilter ? "pointer" : "auto")};
    &:hover,
    &:focus,
    &:active {
      color: ${props =>
        props.$hasFilter ? "var(--grey-text-color)" : "currentColor"};
      & svg {
        stroke: ${props =>
          props.$hasFilter ? "var(--grey-text-color)" : "currentColor"};
      }
    }
  }
`;

const SortButton = styled(FilterButton)`
  & span {
    display: none;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${props =>
      !props.$showSelect ? "var(--grey-text-color)" : "currentColor"};
    & svg {
      stroke: ${props =>
        !props.$showSelect ? "var(--grey-text-color)" : "currentColor"};
    }
  }
  & svg {
    margin-right: 0;
  }
  cursor: ${props => (props.$showSelect ? "auto" : "pointer")};
  @media screen and (min-width: 1440px) {
    & span {
      display: block;
    }
    & svg {
      margin-right: 12px;
    }
  }
`;

const SortWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  right: 0;
`;
export { FilterButton, SortButton, SortWrapper };
