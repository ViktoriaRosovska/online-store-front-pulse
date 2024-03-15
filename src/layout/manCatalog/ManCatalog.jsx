import { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "./ManCatalog.css";
import { brand } from "../../http/ProductsApi.jsx";
import { Aside } from "../../components/Aside/Aside.jsx";
import {host} from "../../http/index.jsx";

const ManCatalog = observer(() => {
  // const refreshPage = () => {
  //   window.location.reload(false)
  // }
  const { store } = useContext(Context);

  const [asyncData, setAsyncData] = useState([]);



  useEffect(() => {
    brand().then((res) => setAsyncData(res));
    store.setProducts(asyncData);
  }, []);

  // const catProduct = store.product.data
  // console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))

  // console.log(asyncData.products)
  // console.log(asyncData.products?.map(el => el._id))

  // console.log(catProduct)

  // useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products/newest')
  //   .then(res => res.json()).then(res => console.log(res))}
  //  , [])

  return (
    <div>
      {/* Компонетн навігації */}
      <div className="manCatalog-navigation">
        <a href="/">Головна</a> / Чоловіче взуття
      </div>
      {/* Компонент фільтрації */}
      <div className="manCatalog-header">
        <div>Фільтр</div>
        <h2>Чоловіче взуття</h2>
        <div>Сортування</div>
      </div>
      {/* Компонент сторінки */}
      <div className="manCatalog-mainPage">
        <Aside />
        <div>
          {asyncData.products
            ?.filter((el) => el.categories.sex !== "female")
            .map((el) => (
              <div key={el._id} className="sport" style={{ cursor: "pointer" }}>
                <Cards info={el.name} image={el.imgThumbnail} price={el.price} id={el._id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});

export default ManCatalog;

// console.log(data.products.map(el => el.name))
