import { CardsListContainer } from "./CardsList.styled.js";
import Cards from "../Cards/Card.jsx";
import { useContext, useEffect, useState } from "react";
// import { observer } from "mobx-react-lite"; ?????
import { brand } from "../../http/ProductsApi.jsx";
import { Context } from "../../main.jsx";

// const brand = async () => {
//   const {data} = await host.get('/products')
//   return data
// }
// const onShowFilter = () => {
//   setShowFilter(!showFilter);
// };

// const catProduct = store.product.data
// console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))

// console.log(asyncData.products)
// console.log(asyncData.products?.map(el => el._id))

// console.log(catProduct)

// useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products')
//   .then(res => res.json()).then(res => store.setProducts(res))}
//  , [])

// console.log(data.products.map(el => el.name))

export const CardsList = () => {
  const { store } = useContext(Context);

  const [asyncData, setAsyncData] = useState([]);

  useEffect(() => {
    brand().then((res) => setAsyncData(res));
    store.setProducts(asyncData);
  }, []);
  return (
    <CardsListContainer>
      {asyncData.products
        ?.filter((el) => el.categories.sex !== "female")
        .map((el) => (
          <div key={el._id} style={{ cursor: "pointer" }}>
            <Cards info={el.name} image={el.imgThumbnail} price={el.price} id={el._id} />
          </div>
        ))}
    </CardsListContainer>
  );
};
