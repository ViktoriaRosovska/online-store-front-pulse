import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetSalesQuery } from "../../redux/products/productsApi";

const Sales = () => {
  const [getSales, { data, isError, isFetching }] = useLazyGetSalesQuery();
  return (
    <CatalogComponent
      title={"Розпродаж"}
      sex={""}
      loader={getSales}
      cardfeature={"sales"}
      sortNewest={false}
      data={data?.products}
      isError={isError}
      isFetching={isFetching}
      totalPages={data?.totalPages}
      page={data?.page}
    />
  );
};

export default Sales;
