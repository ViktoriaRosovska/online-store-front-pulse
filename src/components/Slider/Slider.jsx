import Carousel from "../Carousel/Carousel.jsx";
import './Slider.css'
import {useContext} from "react";

import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import AsyncSlider from "../../asyncSlider/AsyncSlider.jsx";

const Slider = observer( () => {
const {store} = useContext(Context)











  return (
    <>

      <div className='main_block_carausel'>
        <Carousel >
       <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />



        </Carousel>


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
