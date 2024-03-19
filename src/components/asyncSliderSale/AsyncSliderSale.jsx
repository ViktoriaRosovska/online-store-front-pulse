import { useEffect, useState } from "react";
import { brandSales} from "../../http/ProductsApi.jsx";
import CardsSale from "../Cards_sale/Cards_sale.jsx";

const AsyncSliderSale =  () => {
  const [sale, setSale] = useState([]);

  useEffect(() => {
    brandSales().then((res) => setSale(res));
  }, []);

  return (
    <>
      {
        sale.products?.map((el) => {

          return (   <CardsSale
              key={el._id}
              info={el.name}
              image={el.imgThumbnail}
              price={el.price}
              id={el._id}
              sale={Math.round(el.price - (el.price * el.sale) / 100)}
              sales={el.sale}
            />
          );
        })}
    </>
  );
}

export default AsyncSliderSale;
