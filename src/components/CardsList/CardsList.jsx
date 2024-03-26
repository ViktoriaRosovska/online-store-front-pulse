import { CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
// import { useEffect, useState } from "react";
// import { observer } from "mobx-react-lite"; ?????
// import { querySearch } from "../../http/ProductsApi.jsx";
// import { Context } from "../../main.jsx";

// const catProduct = store.product.data
// console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))

// console.log(asyncData.products)
// console.log(asyncData.products?.map(el => el._id))

// console.log(catProduct)

// useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products')
//   .then(res => res.json()).then(res => store.setProducts(res))}
//  , [])

// console.log(data.products.map(el => el.name))

export const CardsList = (props) => {
  // const { store } = useContext(Context);

  // const [asyncData, setAsyncData] = useState([]);
  console.log(props.asyncData);
  // useEffect(() => {
  //   querySearch({ ...props.filterQuery })
  //     .then((res) => setAsyncData(res))
  //     .catch((error) => {
  //       console.error("Ошибка загрузки данных:", error);
  //     });
  // }, []);
  if (!props.asyncData) return <div>Загрузка данных...</div>;
  return (
    <CardsListContainer>
      {props.asyncData.products &&
        props.asyncData.products.map((el) => {
          return (
            <Card key={el._id} info={el.name} image={el.imgThumbnail} price={el.price} id={el._id} sale={el.sale} />
          );
        })}
    </CardsListContainer>
  );
};
