import { useLocation } from "react-router-dom";
import { querySearch } from "../../http/ProductsApi.jsx";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
const Catalog = () => {
  const params = new URLSearchParams(useLocation().search);
  const brand = params.get("brand");
  if (brand) {
    const href = window.location.href.replace(/\?.*$/, "");
    history.pushState(null, null, href);
  }

  return (
    <CatalogComponent
      title={"Каталог"}
      sex={""}
      loader={querySearch}
      cardfeature={"sales"}
      brand={brand}
    />
  );
};

export default Catalog;
