import { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "./ManCatalog.css";
import { brand } from "../../http/ProductsApi.jsx";
// import { Aside } from "../../components/Aside/Aside.jsx";

const ManCatalog = observer(() => {
  // const refreshPage = () => {
  //   window.location.reload(false)
  // }
  const { store } = useContext(Context);

  const [asyncData, setAsyncData] = useState([]);

  // const brand = async () => {
  //   const {data} = await host.get('/products')
  //   return data
  // }
  // const onSelectionChanged = (type, items) => {
  //   console.log("onSelectionChanged", type, items);
  //   switch (type) {
  //     case "brand":
  //       setBrandList(items);
  //       break;
  //     case "season":
  //       setSeasonList(items);
  //       break;
  //     case "size":
  //       setSizeList(items);
  //       break;
  //   }
  // };
  useEffect(() => {
    brand().then((res) => setAsyncData(res));
    store.setProducts(asyncData);
  }, []);

  // const catProduct = store.product.data
  // console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))

  // console.log(asyncData.products)
  // console.log(asyncData.products?.map(el => el._id))

  // console.log(catProduct)

  // useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products')
  //   .then(res => res.json()).then(res => store.setProducts(res))}
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
        {/* <Aside onChanged={onSelectionChanged} /> */}
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
