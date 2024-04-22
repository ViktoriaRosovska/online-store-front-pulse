// import { brandNew } from "../../http/ProductsApi";
// import { useSelector } from "react-redux";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
// import { selectFilterQuery } from "../../redux/filterQuery/filterQuerySelector";
// import { useEffect, useMemo } from "react";
import { useLazyGetNewestQuery } from "../../redux/products/productsApi";

const NewBrands = () => {
  // const filter = useSelector(selectFilterQuery);
  // const filterQuery = useMemo(() => {
  //   return filter;
  // }, [filter]);

  // const newfilterQuery = { ...filterQuery };
  const [getNewest, { data, isError, isFetching }] = useLazyGetNewestQuery();

  // useEffect(() => {
  //   getNewest(filterQuery);
  // }, [getNewest, filterQuery]);
  return (
    <CatalogComponent
      title={"Новинки"}
      sex={""}
      loader={getNewest}
      cardfeature={"newbrands"}
      sortNewest={false}
      data={data}
      isError={isError}
      isFetching={isFetching}
      // filterQuery={newfilterQuery}
    />
  );
};

export default NewBrands;
