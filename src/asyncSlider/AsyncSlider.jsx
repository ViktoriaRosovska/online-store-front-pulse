import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "../main.jsx";
import {brand, brandNew} from "../http/ProductsApi.jsx";
import Cards from "../components/Cards/Cards.jsx";

const AsyncSlider = observer( () => {
  const {store} = useContext(Context)
  const [asyncData, setAsyncData] = useState([]);

  useEffect(() => {
    brandNew().then(res =>  setAsyncData(res))



  }, [])


  return (
    <>
      {  asyncData?.map(el => {
          return (
              <Cards key={el._id}  info={el.name} image={el.imgThumbnail}
                                         price={el.price} id={el._id} />
          )
        }
      )  }
    </>
  );
})

export default AsyncSlider;
