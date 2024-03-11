import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../Cards/Cards.jsx";
import './Slider.css'
import {useContext, useEffect, useState} from "react";
import {brand} from "../../http/ProductsApi.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const Slider = observer( () => {
const {store} = useContext(Context)
  const [asyncData, setAsyncData] = useState(true);






  useEffect(() => {
     brand().then(res =>  store.setProducts(res))

setAsyncData(false)


  },[asyncData])

  console.log(store.product.products?.map(el => el))

  return (
    <>

      <div className='main_block_carausel'>
        {/*<Carousel >*/}
        { store.product.products?.map(el =>


            <Cards key={el._id}  info={el.name} image={el.imgThumbnail}
                   price={el.price}/>



        )  }
        {/*</Carousel>*/}



          {/*<Cards info={'Кросівки OZMILLEN'} image={'src/assets/images/product-images/product-2.png'} price={4999}/>*/}
          {/*<Cards info={'Кросівки OZELIA'} image={'src/assets/images/product-images/product-3.png'} price={4999}/>*/}

          {/*<Cards info={'Футбольні бутси COPA PURE ||'} image={'../../../src/assets/images/product-images/product-1.png'}*/}
          {/*       price={3299}/>*/}
          {/*<Cards info={'Кросівки OZMILLEN'} image={'src/assets/images/product-images/product-2.png'} price={4999}/>*/}
          {/*<Cards info={'Кросівки OZELIA'} image={'src/assets/images/product-images/product-3.png'} price={4999}/>*/}

      </div>
    </>
  );
})

export default Slider;
