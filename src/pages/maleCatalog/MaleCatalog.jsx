import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetAllProductsQuery } from "../../redux/products/productsApi";

const MaleCatalog = () => {
  const [getAllProducts, { data, isError, isFetching }] =
    useLazyGetAllProductsQuery();

  return (
    <CatalogComponent
      title={"Чоловіче взуття"}
      sex={"Чоловік"}
      loader={getAllProducts}
      cardfeature={"sales"}
      sortNewest={true}
      data={data?.products}
      isError={isError}
      isFetching={isFetching}
    />
  );
};

export default MaleCatalog;
