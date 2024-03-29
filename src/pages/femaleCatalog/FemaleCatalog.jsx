import { querySearch } from "../../http/ProductsApi.jsx";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent.jsx";

const FemaleCatalog = () => {
  return <CatalogComponent title={"Жіноче взуття"} sex={"Жінка"} loader={querySearch} />;
};

export default FemaleCatalog;
