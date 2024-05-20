import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NewSlider.css";
import { ReactComponent as SwiperRightArrowIcon } from "../../assets/svg/swiperRightArrow.svg";
import { ReactComponent as SwiperLeftArrowIcon } from "../../assets/svg/swiperLeftArrow.svg";
// import { Pagination, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import Card from "components/Card/Card";
import {
  StyledNavigationNextBtn,
  StyledNavigationPrevBtn,
  SwiperContainer,
} from "./ProductSlider.styled";

register();

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
const ProductSlider = props => {
  const cardSlider = true;

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
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: ".swiper-pagination-bullets",
        }}
        loop={"true"}
        loading="lazy"
        breakpoints={JSON.stringify({
          320: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
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
          "--swiper-pagination-bottom": "0px",
          // "--swiper-pagination-bullet-size": "12px",
          // "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        scrollbar="false"
      >
        {props.products && props.products.length > 0 ? (
          props.products.map(el => {
            return (
              <swiper-slide className="swiper-slide" key={el._id}>
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
              </swiper-slide>
            );
          })
        ) : (
          <div> Loading...</div>
        )}
      </swiper-container>
      {/* <div className="swiper-pagination"></div> */}
    </SwiperContainer>
  );
};

export default ProductSlider;
