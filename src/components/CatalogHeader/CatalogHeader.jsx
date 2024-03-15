import { useState } from "react";
import { FilterButton } from "../Buttons/FilterButton/FilterButton.styled";
import { PageTitle } from "../Typography/PageTitle.styled";
import { CatalogHeaderContainer } from "./CatalogHeader.styled";

export const CatalogHeader = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const onShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <CatalogHeaderContainer>
        <FilterButton onClick={onShowFilter}>Фільтр</FilterButton>

        <PageTitle>Чоловіче взуття</PageTitle>
        <div>Сортування</div>
      </CatalogHeaderContainer>
      {showFilter && (
        <div>
          Брeнд: {props.brandList.join(",")} Сезон: {props.seasonList.join(",")} Розмір: {props.sizeList.join(",")}
        </div>
      )}
    </>
  );
};
