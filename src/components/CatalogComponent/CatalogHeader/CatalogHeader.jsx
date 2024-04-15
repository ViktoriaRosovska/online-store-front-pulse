import {
  FilterButton,
  SortButton,
  SortWrapper,
} from "../../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../../Typography/PageTitle.styled";
import {
  CatalogHeaderContainer,
  FilterWrapper,
  FilterWrapperButton,
  SortCloseBtn,
  SortSelectWrapper,
  StyledHeaderTitleWrapper,
  StyledSelectMenuWrapper,
  StyledSortContainer,
} from "./CatalogHeader.styled";
import { ReactComponent as FilterIcon } from "../../../assets/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../../assets/svg/sortIcon.svg";
import { ReactComponent as CloseBtn } from "../../../assets/svg/closeBtn.svg";
import { SortSelect } from "./SortSelect";
import { useState } from "react";
import options from "../../../data/sortoptions.json";

export const CatalogHeader = props => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSelectMenu, setShowSelectMenu] = useState(false);

  const IsNewest = list => {
    let arr = [];

    if (!props.sortNewest) {
      arr = [...list.filter(el => el.value !== "createdAt")];
    } else {
      arr = [...list];
    }
    return arr;
  };

  const hasFilter =
    props.selectedBrands.length +
      props.selectedSeasons.length +
      props.selectedColors.length +
      props.selectedSizes.length +
      props.selectedSex.length >
    0;
  if (!hasFilter && !showFilter) setShowFilter(true);

  const onToggleFilter = () => {
    setShowFilter(!showFilter);
    props.onAsideShow(!showFilter);
  };

  const showSelect = props.sortOrder !== null;
  if (showSelect && showSelectMenu) setShowSelectMenu(false);

  return (
    <CatalogHeaderContainer>
      <StyledHeaderTitleWrapper>
        <FilterButton onClick={onToggleFilter} $hasFilter={hasFilter}>
          <FilterIcon />
          Фільтр
        </FilterButton>

        <PageTitle>{props.title}</PageTitle>

        <StyledSortContainer>
          <SortWrapper>
            <SortButton
              $showSelect={showSelect}
              onClick={() => {
                setShowSelectMenu(!showSelectMenu);
              }}
            >
              <SortIcon />
              <span>Сортування</span>
            </SortButton>
            {Boolean(showSelect) && (
              <SortSelectWrapper>
                <span>:</span>
                <SortCloseBtn onClick={() => props.onSortOrderChanged(null)}>
                  <CloseBtn />
                </SortCloseBtn>

                <SortSelect
                  onChange={e => props.onSortOrderChanged(e)}
                  value={props.sortOrder}
                  options={IsNewest(options)}
                />
              </SortSelectWrapper>
            )}
          </SortWrapper>
        </StyledSortContainer>

        {Boolean(showSelectMenu) && Boolean(!showSelect) && (
          <StyledSelectMenuWrapper>
            <ul>
              {IsNewest(options).map(o => (
                <li
                  key={o.value}
                  onClick={() => props.onSortOrderChanged(o.value)}
                >
                  {o.label}
                </li>
              ))}
            </ul>
          </StyledSelectMenuWrapper>
        )}
      </StyledHeaderTitleWrapper>

      {hasFilter && showFilter ? (
        <FilterWrapper>
          {Boolean(props.selectedSex.length) && (
            <FilterWrapperButton
              onClick={() => props.onClearOneFilterButton("sex")}
            >
              <CloseBtn /> Стать: {props.selectedSex.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(props.selectedBrands.length) && (
            <FilterWrapperButton
              onClick={() => props.onClearOneFilterButton("brand")}
            >
              <CloseBtn /> Брeнд: {props.selectedBrands.join(", ")}
            </FilterWrapperButton>
          )}

          {Boolean(props.selectedSeasons.length) && (
            <FilterWrapperButton
              onClick={() => props.onClearOneFilterButton("season")}
            >
              <CloseBtn /> Сезон: {props.selectedSeasons.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(props.selectedSizes.length) && (
            <FilterWrapperButton
              onClick={() => props.onClearOneFilterButton("size")}
            >
              <CloseBtn /> Розмір: {props.selectedSizes.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(props.selectedColors.length) && (
            <FilterWrapperButton
              onClick={() => props.onClearOneFilterButton("color")}
            >
              <CloseBtn /> Колір: {props.selectedColors.join(", ")}
            </FilterWrapperButton>
          )}
          {Boolean(
            props.selectedBrands.length ||
              props.selectedSeasons.length ||
              props.selectedSizes.length ||
              props.selectedColors.length ||
              props.selectedSex.length
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
