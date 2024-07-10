import { Helmet } from "react-helmet";
import  CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";

const FemaleCatalog = () => {
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  return (
    <>
      <Helmet>
        <title>PulseRun Female</title>
      </Helmet>
      <CatalogComponent
        title={"Жіноче взуття"}
        sex={"Жінка"}
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

export default FemaleCatalog;
