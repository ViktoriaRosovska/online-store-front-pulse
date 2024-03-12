import Carousel from "../Carousel/Carousel.jsx";
import CardsSale from "../Cards_sale/Cards_sale.jsx";
import AsyncSliderSale from "../asyncSliderSale/AsyncSliderSale.jsx";

const SliderSale = () => {
  return (
    <>
      <div className='main_block_carausel'>
        <Carousel>

          <AsyncSliderSale />
          <AsyncSliderSale />
          <AsyncSliderSale />

          {/*<CardsSale info={'Adidas Superstar'} image={'src/assets/images/product-images/product-6.png'} price={2999} sale={2498} />*/}
        </Carousel>
      </div>
    </>
  );
};

export default SliderSale;
