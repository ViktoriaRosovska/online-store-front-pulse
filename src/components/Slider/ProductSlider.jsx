import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NewSlider.css";
import { ReactComponent as SwiperRightArrowIcon } from "../../assets/svg/swiperRightArrow.svg";
import { ReactComponent as SwiperLeftArrowIcon } from "../../assets/svg/swiperLeftArrow.svg";

import Card from "components/Card/Card";
import {
  StyledNavigationNextBtn,
  StyledNavigationPrevBtn,
  SwiperContainer,
} from "./ProductSlider.styled";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// register();

import "swiper/css/navigation";
import { useRef } from "react";

const ProductSlider = props => {
  const cardSlider = true;

  const swiperRef = useRef();

  const pagination = {
    clickable: true,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let text = [];
      let start, end;
      if (current <= 3) {
        start = 1;
        end = Math.min(total, 5);
      } else if (current >= total - 2) {
        start = Math.max(1, total - 4);
        end = total;
      } else {
        start = current - 2;
        end = current + 2;
      }
      for (let i = start; i <= end; ++i) {
        const style =
          current === i
            ? "swiper-pagination-bullet-active"
            : "swiper-pagination-bullet";
        text.push(`<li class="${style}"></li>`);
      }
      return text.join("");
    },
  };

  return (
    <SwiperContainer>
      <StyledNavigationPrevBtn
        className="nav-btn custom-prev-button"
        $card={true}
      >
        <SwiperLeftArrowIcon />
      </StyledNavigationPrevBtn>

      <StyledNavigationNextBtn
        className="nav-btn custom-next-button"
        $card={true}
      >
        <SwiperRightArrowIcon />
      </StyledNavigationNextBtn>

      <swiper-container
        class="swiper-wrapper"
        // modules={[Pagination, Navigation]}
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
        pagination-dynamic-bullets="true"
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: ".swiper-pagination-bullets",
          dynamicBullets: true,
          dynamicMainBullets: 5,
        }}
        // loop={"true"}
        loading="lazy"
        breakpoints={JSON.stringify({
          310: {
            slidesPerView: 1,
            spaceBetween: 12,
            slidesPerGroup: 1,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
          },

          1440: {
            slidesPerView: 3,
            spaceBetween: 89,
            slidesPerGroup: 3,
          },
        })}
        style={{
          "--swiper-pagination-color": "var(--black-bg-color)",
          "--swiper-pagination-bullet-inactive-color": "var(--grey-text-color)",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          // "--swiper-pagination-bullet-width": "5px",
          // "--swiper-pagination-bottom": "26px",
          // "--swiper-pagination-bullet-size": "12px",
          // "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <ul>
          {props.products && props.products.length > 0 ? (
            props.products.map(el => {
              return (
                <SwiperSlide className="swiper-slide" key={el._id}>
                  <Card
                    sales={el.sale}
                    key={el._id}
                    info={el.name}
                    image={el.imgThumbnail}
                    price={el.basePrice}
                    id={el._id}
                    sale={el.sale}
                    cardfeature={props.cardfeature}
                    cardSlider={cardSlider}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <div> Loading...</div>
          )}
        </ul>
      </swiper-container>
      <div className="swiper-navigation">
        <StyledNavigationPrevBtn
          onClick={() => swiperRef.current?.slidePrev()}
          className="nav-btn custom-prev-button"
          $card={true}
        >
          <SwiperLeftArrowIcon />
        </StyledNavigationPrevBtn>

        <StyledNavigationNextBtn
          onClick={() => swiperRef.current?.slideNext()}
          className="nav-btn custom-next-button"
          $card={true}
        >
          <SwiperRightArrowIcon />
        </StyledNavigationNextBtn>
      </div>
    </SwiperContainer>
  );
};

export default ProductSlider;
