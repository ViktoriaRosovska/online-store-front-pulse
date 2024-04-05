import { brandSales } from "../../http/ProductsApi";
import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";

const Sales = () => {
  return (
    <CatalogComponent
      title={"Розпродаж"}
      sex={""}
      loader={brandSales}
      cardfeature={"sales"}
    />
  );
};

export default Sales;
