import { querySearch } from "../../http/ProductsApi.jsx";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";
const Catalog = () => {
  return (
    <CatalogComponent
      title={"Каталог"}
      sex={""}
      loader={querySearch}
      cardfeature={"sales"}
    />
  );
};

export default Catalog;
