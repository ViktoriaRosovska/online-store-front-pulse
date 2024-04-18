import { brandSales } from "../../http/ProductsApi";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { selectFilterQuery } from "../../redux/filterQuery/filterQuerySelector";
import { useLazyGetSalesQuery } from "../../redux/products/productsApi";

const Sales = () => {
  const filter = useSelector(selectFilterQuery);
  const filterQuery = useMemo(() => {
    return filter;
  }, [filter]);

  const newfilterQuery = { ...filterQuery };
  const [getSales, { data, isError, isFetching }] = useLazyGetSalesQuery();

  useEffect(() => {
    getSales(filterQuery);
  }, [getSales, filterQuery]);
  return (
    <CatalogComponent
      title={"Розпродаж"}
      sex={""}
      loader={brandSales}
      cardfeature={"sales"}
      sortNewest={false}
      data={data}
      isError={isError}
      isFetching={isFetching}
      filterQuery={newfilterQuery}
    />
  );
};

export default Sales;
