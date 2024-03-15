import './Woomans.css'
import {useEffect, useState} from "react";
import {famale} from "../../http/ProductsApi.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import {Aside} from "../../components/Aside/Aside.jsx";
const Woomans = () => {
  const [woomans, setWoomans] = useState([])

  useEffect(() => {
    famale().then((res) => setWoomans(res))
  },[])

  return (
    <div>
      {/* Компонетн навігації */}
      <div className="manCatalog-navigation">
        <a href="/">Головна</a> / Жіноче взуття
      </div>
      {/* Компонент фільтрації */}
      <div className="manCatalog-header">
        <div>Фільтр</div>
        <h2>Жіноче взуття</h2>
        <div>Сортування</div>
      </div>
      {/* Компонент сторінки */}
      <div className="manCatalog-mainPage">
        <Aside />


      {woomans.products?.map(el =>

        <div key={el._id} className="sport" style={{cursor: "pointer"}}>
          <Cards info={el.name} image={el.imgThumbnail} price={el.price} id={el._id}/>
        </div>
      )}
    </div>
    </div>
  );
};

export default Woomans;
