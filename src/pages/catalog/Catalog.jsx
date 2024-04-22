import { useLocation } from "react-router-dom";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";

const Catalog = () => {
  const params = new URLSearchParams(useLocation().search);
  const brand = params.get("brand");
  if (brand) {
    const href = window.location.href.replace(/\?.*$/, "");
    history.pushState(null, null, href);
  }

  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  return (
    <CatalogComponent
      title={"Каталог"}
      sex={""}
      loader={getAllProducts}
      cardfeature={"sales"}
      brand={brand}
      sortNewest={true}
      data={data}
      isError={isError}
      isFetching={isFetching}
    />
  );
};

export default Catalog;
