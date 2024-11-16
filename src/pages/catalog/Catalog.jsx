import { useLocation } from "react-router-dom";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Catalog = () => {
  const params = new URLSearchParams(useLocation().search);
  const brand = params.get("brand");

  const [firstLoad, setFirstLoad] = useState(true);
  const [lastFetching, setLastFetching] = useState(false);

  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  useEffect(() => {
    if (firstLoad && lastFetching && !isFetching) setFirstLoad(false);
    setLastFetching(isFetching);
  }, [isFetching, lastFetching, firstLoad]);

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
        isFetching={firstLoad || isFetching}
        page={data?.page}
        totalPages={data?.totalPages}
      />
    </>
  );
};

export default Catalog;
