import {useEffect, useState} from "react";
import {brandSales} from "../../http/ProductsApi.jsx";
import Cards_sale from "../Cards_sale/Cards_sale.jsx";

const AsyncSliderSale = () => {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    brandSales().then(res => setSale(res))
  })
  return (
    <>
      {  sale?.map(el => {
          return (
            <Cards_sale key={el._id}  info={el.name} image={el.imgThumbnail}
                   price={el.price} id={el._id} sale={el.price - el.price * el.sale / 100} />
          )
        }
      )  }

    </>
  );
};

export default AsyncSliderSale;
