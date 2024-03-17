import { useState } from "react";
import { FilterButton } from "../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../Typography/PageTitle.styled";
import { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton } from "./CatalogHeader.styled";
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
        <FilterWrapper>
          {Boolean(props.brandList.length) && (
            <FilterWrapperButton>Х Брeнд: {props.brandList.join(", ")}</FilterWrapperButton>
          )}

          {Boolean(props.seasonList.length) && (
            <FilterWrapperButton>Х Сезон: {props.seasonList.join(", ")}</FilterWrapperButton>
          )}
          {Boolean(props.sizeList.length) && (
            <FilterWrapperButton>Х Розмір: {props.sizeList.join(", ")}</FilterWrapperButton>
          )}

          {Boolean(props.brandList.length || props.seasonList.length || props.sizeList.length) && (
            <FilterWrapperButton onClick={props.onClearFiltersButton}>Очистити все Х</FilterWrapperButton>
          )}
        </FilterWrapper>
      )}
    </>
  );
};