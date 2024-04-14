import Breadcrumbs from "components/Breadcrumbs";
import { CatalogNavigationWrapper } from "./CatalogNavigation.styled";

export const CatalogNavigation = props => {
  return (
    <CatalogNavigationWrapper>
      {/* <a href="./">Головна</a> <span>/</span> <span>{props.title}</span> */}
      <Breadcrumbs current={props.title} />
    </CatalogNavigationWrapper>
  );
};
