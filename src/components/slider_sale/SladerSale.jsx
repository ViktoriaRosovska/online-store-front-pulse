import Carousel from "../Carousel/Carousel.jsx";
import CardsSale from "../Cards_sale/Cards_sale.jsx";

const SliderSale = () => {
  return (
    <>
      <div className='main_block_carausel'>
        <Carousel>
          <CardsSale info={'Adidas NMD_R1 Primeblue'} image={'src/assets/images/product-images/product-4.png'} price={5598} sale={2499}/>
          <CardsSale info={'Adidas Response CL'} image={'src/assets/images/product-images/product-5.png'} price={4699} sale={2499} />
          <CardsSale info={'Adidas Superstar'} image={'src/assets/images/product-images/product-6.png'} price={2999} sale={2498} />

          <CardsSale info={'Adidas NMD_R1 Primeblue'} image={'src/assets/images/product-images/product-4.png'} price={5598} sale={2499}/>
          <CardsSale info={'Adidas Response CL'} image={'src/assets/images/product-images/product-5.png'} price={4699} sale={2499} />
          <CardsSale info={'Adidas Superstar'} image={'src/assets/images/product-images/product-6.png'} price={2999} sale={2498} />
        </Carousel>
      </div>
    </>
  );
};

export default SliderSale;
