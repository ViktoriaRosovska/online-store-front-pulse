import { FilterButton } from "../../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../../Typography/PageTitle.styled";
import { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton } from "./CatalogHeader.styled";
import { ReactComponent as FilterIcon } from "../../../assets/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../../assets/svg/sortIcon.svg";
import { ReactComponent as CloseBtn } from "../../../assets/svg/closeBtn.svg";
import { SortSelect } from "./SortSelect";
import { useState } from "react";
import options from "../../../data/sortoptions.json";
import "./sort-select.css";

export const CatalogHeader = (props) => {
  const [showFilter, setShowFilter] = useState(true);
  const [showSelectMenu, setShowSelectMenu] = useState(false);

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

  const showSelect = props.sortOrder !== null;
  if (showSelect && showSelectMenu) setShowSelectMenu(false);

  return (
    <CatalogHeaderContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          position: "relative",
        }}
      >
        <FilterButton onClick={onToggleFilter}>
          <FilterIcon />
          Фільтр
        </FilterButton>
        <PageTitle>{props.title}</PageTitle>

        <div style={{ display: "flex", position: "relative" }}>
          <FilterButton
            onClick={() => {
              setShowSelectMenu(!showSelectMenu);
            }}
          >
            <SortIcon />
            Сортування
          </FilterButton>
          {Boolean(showSelect) && (
            <div className="sort-result">
              <span>:</span>
              <SortSelect onChange={(e) => props.onSortOrderChanged(e)} value={props.sortOrder} />
              <button onClick={() => props.onSortOrderChanged(null)}>X</button>
            </div>
          )}
        </div>

        {Boolean(showSelectMenu) && Boolean(!showSelect) && (
          <div className="select-menu-wrapper">
            <ul>
              {options.map((o) => (
                <li key={o.value} onClick={() => props.onSortOrderChanged(o.value)}>
                  {o.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {hasFilter && showFilter ? (
        <FilterWrapper>
          {Boolean(props.selectedBrands.length) && (
            <FilterWrapperButton onClick={() => props.onClearOneFilterButton("brand")}>
              <CloseBtn /> Брeнд: {props.selectedBrands.join(", ")}
            </FilterWrapperButton>
          )}

          {Boolean(props.selectedSeasons.length) && (
            <FilterWrapperButton onClick={() => props.onClearOneFilterButton("season")}>
              <CloseBtn /> Сезон: {props.selectedSeasons.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(props.selectedSizes.length) && (
            <FilterWrapperButton onClick={() => props.onClearOneFilterButton("size")}>
              <CloseBtn /> Розмір: {props.selectedSizes.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(props.selectedColors.length) && (
            <FilterWrapperButton onClick={() => props.onClearOneFilterButton("color")}>
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
  );
};
