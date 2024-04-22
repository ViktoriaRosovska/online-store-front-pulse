// import { querySearch } from "../../http/ProductsApi.jsx";
// import { useSelector } from "react-redux";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
// import { useEffect, useMemo } from "react";
// import { selectFilterQuery } from "../../redux/filterQuery/filterQuerySelector.js";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";

const FemaleCatalog = () => {
  // const filter = useSelector(selectFilterQuery);
  // const filterQuery = useMemo(() => {
  //   return filter;
  // }, [filter]);

  // const newfilterQuery = { ...filterQuery, sex: "Жінка" };
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  // useEffect(() => {
  //   getAllProducts(filterQuery);
  // }, [getAllProducts, filterQuery]);
  return (
    <CatalogComponent
      title={"Жіноче взуття"}
      sex={"Жінка"}
      // loader={querySearch}
      loader={getAllProducts}
      cardfeature={"sales"}
      sortNewest={true}
      data={data}
      isError={isError}
      isFetching={isFetching}
      // filterQuery={newfilterQuery}
    />
  );
};

export default FemaleCatalog;
