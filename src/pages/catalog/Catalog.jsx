import { useLocation } from "react-router-dom";
// import { querySearch } from "../../http/ProductsApi.jsx";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { selectFilterQuery } from "../../redux/filterQuery/filterQuerySelector.js";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";

const Catalog = () => {
  const params = new URLSearchParams(useLocation().search);
  const brand = params.get("brand");
  if (brand) {
    const href = window.location.href.replace(/\?.*$/, "");
    history.pushState(null, null, href);
  }
  const filter = useSelector(selectFilterQuery);
  const filterQuery = useMemo(() => {
    return filter;
  }, [filter]);

  const newfilterQuery = { ...filterQuery, sex: "Жінка" };
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  useEffect(() => {
    getAllProducts(filterQuery);
  }, [getAllProducts, filterQuery]);
  return (
    <CatalogComponent
      title={"Каталог"}
      sex={""}
      // loader={querySearch}
      cardfeature={"sales"}
      brand={brand}
      sortNewest={true}
      data={data}
      isError={isError}
      isFetching={isFetching}
      filterQuery={newfilterQuery}
    />
  );
};

export default Catalog;
