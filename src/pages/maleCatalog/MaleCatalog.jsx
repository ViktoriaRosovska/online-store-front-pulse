import { Helmet } from "react-helmet";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi";

const MaleCatalog = () => {
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  console.log("MaleCatalog  data", data);
  return (
    <>
      <Helmet>
        <title>PulseRun Male</title>
      </Helmet>
      <CatalogComponent
        title={"Чоловіче взуття"}
        sex={"Чоловік"}
        loader={getAllProducts}
        cardfeature={"sales"}
        sortNewest={true}
        data={data?.products}
        isError={isError}
        isFetching={isFetching}
        totalPages={data?.totalPages}
        page={data?.page}
      />
    </>
  );
};

export default MaleCatalog;
