import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { useLazyGetNewestQuery } from "../../redux/products/productsApi";

const NewBrands = () => {
  const [getNewest, { data, isError, isFetching }] = useLazyGetNewestQuery();

  return (
    <CatalogComponent
      title={"Новинки"}
      sex={""}
      loader={getNewest}
      cardfeature={"newbrands"}
      sortNewest={false}
      data={data}
      isError={isError}
      isFetching={isFetching}
    />
  );
};

export default NewBrands;
