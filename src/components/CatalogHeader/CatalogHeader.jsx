// import { useState } from "react";
import { FilterButton } from "../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../Typography/PageTitle.styled";
import { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton } from "./CatalogHeader.styled";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/svg/sortIcon.svg";
import { ReactComponent as CloseBtn } from "../../assets/svg/closeBtn.svg";
import { useState } from "react";

export const CatalogHeader = (props) => {
  const [showFilter, setShowFilter] = useState(true);

  const hasFilter =
    props.selectedBrands.length +
      props.selectedSeasons.length +
      props.selectedColors.length +
      props.selectedSizes.length >
    0;
  if (!hasFilter && !showFilter) setShowFilter(true);

  const onToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <CatalogHeaderContainer>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <FilterButton onClick={onToggleFilter}>
            <FilterIcon />
            Фільтр
          </FilterButton>
          <PageTitle>{props.title}</PageTitle>
          <FilterButton>
            <SortIcon />
            Сортування
          </FilterButton>
        </div>

        {hasFilter && showFilter ? (
          <FilterWrapper>
            {Boolean(props.selectedBrands.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Брeнд: {props.selectedBrands.join(", ")}
              </FilterWrapperButton>
            )}

            {Boolean(props.selectedSeasons.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Сезон: {props.selectedSeasons.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(props.selectedSizes.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Розмір: {props.selectedSizes.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(props.selectedColors.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Колір: {props.selectedColors.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(
              props.selectedBrands.length ||
                props.selectedSeasons.length ||
                props.selectedSizes.length ||
                props.selectedColors.length
            ) && (
              <FilterWrapperButton onClick={props.onClearFiltersButton}>
                Очистити все <CloseBtn />
              </FilterWrapperButton>
            )}
          </FilterWrapper>
        ) : null}
      </CatalogHeaderContainer>
    </>
  );
};
