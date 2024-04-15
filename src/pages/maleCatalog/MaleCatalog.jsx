import { querySearch } from "../../http/ProductsApi";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";

const MaleCatalog = () => {
  return (
    <CatalogComponent
      title={"Чоловіче взуття"}
      sex={"Чоловік"}
      loader={querySearch}
      cardfeature={"sales"}
      sortNewest={true}
    />
  );
};

export default MaleCatalog;
