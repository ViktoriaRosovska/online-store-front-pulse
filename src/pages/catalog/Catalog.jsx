import { useLocation } from "react-router-dom";
import  CatalogComponent  from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";
import { Helmet } from "react-helmet";

const Catalog = () => {
  const params = new URLSearchParams(useLocation().search);
  const brand = params.get("brand");

  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  return (
    <>
      <Helmet>
        <title>PulseRun Catalog</title>
      </Helmet>
      <CatalogComponent
        title={"Каталог"}
        sex={""}
        loader={getAllProducts}
        cardfeature={"sales"}
        brand={brand}
        sortNewest={true}
        data={data?.products}
        isError={isError}
        isFetching={isFetching}
        page={data?.page}
        totalPages={data?.totalPages}
      />
    </>
  );
};

export default Catalog;
