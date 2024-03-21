import './NewSlider.css'
import {useEffect, useState} from "react";
import {brandSales} from "../../http/ProductsApi.jsx";
import { register } from 'swiper/element/bundle';
import CardsSale from "../Cards_sale/Cards_sale.jsx";







register()
const NewSlider = () => {

  const [sale, setSale] = useState([]);

  useEffect(() => {
    brandSales().then((res) => setSale(res));
  }, []);



  return (
    <div className="swiper-wrapper ">

      <swiper-container

        spaceBetween={10}
        navigation={{nextEl: 'next'}}
        pagination={{clickable: true}}


        slides-per-view="3"

        loading="lazy"
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",

          "--swiper-pagination-bullet-size": "12px",


          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-button-next-background-image": "url(../../../public/icons/White Circular Buttons.png)",
          "--swiper-navigation-color": "black",


        }}


        scrollbar="false">
        {sale.products?.map((el) => {
          return (


            <swiper-slide class="swiper-wrapper" key={el._id}>
              <CardsSale
                info={el.name}
                image={el.imgThumbnail}
                price={el.price}
                id={el._id}
                sale={Math.round(el.price - (el.price * el.sale) / 100)}
                sales={el.sale}
              />
            </swiper-slide>

          );
        })}
        ...
      </swiper-container>
    </div>
  );
};

export default NewSlider;
