import { brandNew } from "../../http/ProductsApi";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";

const NewBrands = () => {
  return <CatalogComponent title={"Новинки"} sex={""} loader={brandNew} />;
};

export default NewBrands;
