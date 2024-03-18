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
    props.brandList.length + props.sizeList.length + props.colorList.length + props.seasonList.length > 0;
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
            {Boolean(props.brandList.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Брeнд: {props.brandList.join(", ")}
              </FilterWrapperButton>
            )}

            {Boolean(props.seasonList.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Сезон: {props.seasonList.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(props.sizeList.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Розмір: {props.sizeList.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(props.colorList.length) && (
              <FilterWrapperButton>
                <CloseBtn /> Колір: {props.colorList.join(", ")}
              </FilterWrapperButton>
            )}
            {Boolean(props.brandList.length || props.seasonList.length || props.sizeList.length) && (
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
