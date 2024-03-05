import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../Cards/Cards.jsx";
import './Slider.css'

const Slider = () => {
  return (
    <>

      <div className='main_block_carausel'>
        <Carousel>
          <Cards info={'Футбольні бутси COPA PURE ||'} image={'../../../src/assets/images/product-images/product-1.png'}
                 price={3299}/>
          <Cards info={'Кросівки OZMILLEN'} image={'src/assets/images/product-images/product-2.png'} price={4999}/>
          <Cards info={'Кросівки OZELIA'} image={'src/assets/images/product-images/product-3.png'} price={4999}/>

          <Cards info={'Футбольні бутси COPA PURE ||'} image={'../../../src/assets/images/product-images/product-1.png'}
                 price={3299}/>
          <Cards info={'Кросівки OZMILLEN'} image={'src/assets/images/product-images/product-2.png'} price={4999}/>
          <Cards info={'Кросівки OZELIA'} image={'src/assets/images/product-images/product-3.png'} price={4999}/>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
