import { FilterButton } from "../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../Typography/PageTitle.styled";
import { CatalogHeaderContainer, FilterWrapper, FilterWrapperButton } from "./CatalogHeader.styled";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/svg/sortIcon.svg";
import { ReactComponent as CloseBtn } from "../../assets/svg/closeBtn.svg";

import { useState } from "react";
import "./sort-select.css";
export const CatalogHeader = (props) => {
  const [showFilter, setShowFilter] = useState(true);
  const [selectSortValue, setSelectSortValue] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  console.log("selectSortValue", selectSortValue);
  console.log("showSelect", showSelect);
  console.log("showSelectMenu", showSelectMenu);
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
              {/* <div className="sort-result-item">
                {selectSortValue} <DownArrow />
              </div> */}
              <select
                onChange={(e) => {
                  setSelectSortValue(e.target.value);
                }}
                // onClick={() => {
                //   setShowSelectMenu(!showSelectMenu);
                // }}
                className="sort-select"
                value={selectSortValue}
              >
                <option value={"Новинки"} className="optionSelect">
                  Новинки
                </option>
                <option value={"Від дешевших"} className="optionSelect">
                  Від дешевших
                </option>
                <option value={"Від дорожчих"} className="optionSelect">
                  Від дорожчих
                </option>
              </select>
            </div>
          )}
        </div>

        {Boolean(showSelectMenu) && Boolean(!showSelect) && (
          <div className="select-menu-wrapper">
            <ul>
              <li
                onClick={() => {
                  setSelectSortValue("Новинки");
                  setShowSelectMenu(false);
                  setShowSelect(true);
                }}
              >
                Новинки
              </li>
              <li
                onClick={() => {
                  setSelectSortValue("Від дешевших");
                  setShowSelectMenu(false);
                  setShowSelect(true);
                }}
              >
                Від дешевших
              </li>
              <li
                onClick={() => {
                  setSelectSortValue("Від дорожчих");
                  setShowSelectMenu(false);
                  setShowSelect(true);
                }}
              >
                Від дорожчих
              </li>
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
