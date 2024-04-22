// import { querySearch } from "../../http/ProductsApi";
// import { useEffect, useMemo } from "react";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
// import { useSelector } from "react-redux";
// import { selectFilterQuery } from "../../redux/filterQuery/filterQuerySelector";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi";

const MaleCatalog = () => {
  // const filter = useSelector(selectFilterQuery);
  // const filterQuery = useMemo(() => {
  //   return filter;
  // }, [filter]);

  // const newfilterQuery = { ...filterQuery, sex: "Чоловік" };
  // if (newfilterQuery) {
  // console.log(newfilterQuery);
  // console.log("filter-size", memoFilter.size.split(",")[0]);
  // }
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  // useEffect(() => {
  //   getAllProducts(filterQuery);
  // }, [getAllProducts, filterQuery]);
  return (
    <CatalogComponent
      title={"Чоловіче взуття"}
      sex={"Чоловік"}
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

export default MaleCatalog;
