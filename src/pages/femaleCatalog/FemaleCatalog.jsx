import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi.js";

const FemaleCatalog = () => {
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  return (
    <CatalogComponent
      title={"Жіноче взуття"}
      sex={"Жінка"}
      loader={getAllProducts}
      cardfeature={"sales"}
      sortNewest={true}
      data={data}
      isError={isError}
      isFetching={isFetching}
    />
  );
};

export default FemaleCatalog;
