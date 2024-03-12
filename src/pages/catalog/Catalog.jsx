import './Catalog.css'
import {observer} from "mobx-react-lite";
import Cards from "../../components/Cards/Cards.jsx";
import {useEffect, useState} from "react";
import {brand} from "../../http/ProductsApi.jsx";
const Catalog = observer( () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    brand().then(res =>  setCatalog(res))
  }, []);
  return (
    <>


  {
    catalog.products?.map((el) => (
        <div key={el._id} className='sport' style={{cursor: 'pointer'}}>
          <Cards info={el.name}
                 image={el.imgThumbnail}
                 price={el.price}
                 id={el._id}

          />

        </div>

      )
    )
  }




{/*<Footer />*/}
    </>
  );
})

export default Catalog;
