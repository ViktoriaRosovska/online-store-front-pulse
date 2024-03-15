import { useState } from "react";
import { FilterButton } from "../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../Typography/PageTitle.styled";
import { CatalogHeaderContainer } from "./CatalogHeader.styled";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/svg/sortIcon.svg";

export const CatalogHeader = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const onShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <CatalogHeaderContainer>
        <FilterButton onClick={onShowFilter}>
          <FilterIcon />
          Фільтр
        </FilterButton>

        <PageTitle>{props.title}</PageTitle>
        <FilterButton>
          <SortIcon />
          Сортування
        </FilterButton>
      </CatalogHeaderContainer>
      {showFilter && (
        <div>
          Брeнд: {props.brandList.join(",")} Сезон: {props.seasonList.join(",")} Розмір: {props.sizeList.join(",")}
        </div>
      )}
    </>
  );
};
