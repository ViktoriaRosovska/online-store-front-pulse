import { Helmet } from "react-helmet";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetSalesQuery } from "../../redux/products/productsApi";

const Sales = () => {
  const [getSales, { data, isError, isFetching }] = useLazyGetSalesQuery();
  return (
    <>
      <Helmet>
        <title>PulseRun Sales</title>
      </Helmet>
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
    </>
  );
};

export default Sales;
