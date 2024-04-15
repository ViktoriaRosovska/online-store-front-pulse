import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  margin-bottom: 24px;
`;
const FilterWrapper = styled.div`
  display: flex;
  gap: 17px;
  width: fit-content;
`;
const FilterWrapperButton = styled.button`
  border: none;
  background-color: var(--grey-filter-btn-color);
  border-radius: 16px;
  font-family: "Roboto";
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  padding: 2.5px 9px;
  min-width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  stroke: var(--black-text-color);
  &:hover {
    color: var(--white-text-color);
    stroke: var(--white-text-color);
    background-color: var(--black-bg-color);
  }
`;
const SortSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const SortCloseBtn = styled.button`
  border: 1px solid transparent;
  padding: 0;
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  stroke: var(--black-text-color);
  cursor: pointer;
  &:hover {
    stroke: var(--grey-text-color);
  }
`;

const StyledSelectMenuWrapper = styled.div`
  position: absolute;
  z-index: 10;
  opacity: 1;
  width: 180px;
  background-color: white;
  border: 1px solid var(--black-bg-color);
  padding: 9px 12px;
  border-radius: 16px;
  top: 36px;
  right: 0;
  & ul > li {
    border-bottom: 1px solid var(--black-bg-color);
    padding-bottom: 10px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.01em;
    cursor: pointer;
  }
  & ul > li:hover {
    color: var(--grey-text-color);
  }
  & ul > li:not(:first-child) {
    padding-top: 4px;
  }
`;
export {
  CatalogHeaderContainer,
  FilterWrapper,
  FilterWrapperButton,
  SortCloseBtn,
  SortSelectWrapper,
  StyledSelectMenuWrapper,
};
