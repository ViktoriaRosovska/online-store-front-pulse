import { useEffect, useState } from "react";
import { brandNew } from "../../http/ProductsApi.jsx";
import Card_slider from "../Card_slider/Card_slider.jsx";

const OneSlider = () => {
  const resWidth = window.innerWidth;

  const [sale, setSale] = useState([]);

  useEffect(() => {
    brandNew().then((res) => setSale(res));
  }, []);
  return (
    <div className="swiper-wrapper ">
      <swiper-container
        spaceBetween={10}
        navigation={resWidth < 500 ? "false" : "true"}
        pagination={{ clickable: true }}
        slides-per-view={resWidth < 600 ? 1 : 3}
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
        scrollbar="false"
      >
        {sale.products?.map((el) => {
          return (
            <swiper-slide class="swiper-wrapper" key={el._id}>
              <Card_slider
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

export default OneSlider;
