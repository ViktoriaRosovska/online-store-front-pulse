import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;*/
  margin-bottom: 24px;
`;
const FilterWrapper = styled.div`
  display: flex;
  gap: 17px;
  width: fit-content;

  /* margin-bottom: 24px; */
  /* border: 1px solid red; */
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
export { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton };
