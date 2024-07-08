import { Helmet } from "react-helmet";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetNewestQuery } from "../../redux/products/productsApi";

const NewBrands = () => {
  const [getNewest, { data, isError, isFetching }] = useLazyGetNewestQuery();

  const newestProducts = data?.products?.filter(el => el?.sale === 0);

  return (
    <>
      <Helmet>
        <title>PulseRun NewBrands</title>
      </Helmet>
      <CatalogComponent
        title={"Новинки"}
        sex={""}
        loader={getNewest}
        cardfeature={"newbrands"}
        sortNewest={false}
        data={newestProducts}
        isError={isError}
        isFetching={isFetching}
        totalPages={data?.totalPages}
        page={data?.page}
      />
    </>
  );
};

export default NewBrands;
