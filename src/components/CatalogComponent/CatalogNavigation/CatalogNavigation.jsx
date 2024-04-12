import { CatalogNavigationWrapper } from "./CatalogNavigation.styled";

export const CatalogNavigation = props => {
  return (
    <CatalogNavigationWrapper>
      <a href="./">Головна</a> <span>/</span> <span>{props.title}</span>
    </CatalogNavigationWrapper>
  );
};
