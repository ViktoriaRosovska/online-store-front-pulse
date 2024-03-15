import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const FilterWrapper = styled.div`
  display: flex;
  gap: 17px;
  margin-bottom: 24px;
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
`;
export { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton };
