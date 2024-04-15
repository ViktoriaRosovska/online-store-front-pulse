import "swiper/css/navigation";
import "./NewSlider.css";
import { ReactComponent as SwiperRightArrowIcon } from "../../assets/svg/swiperRightArrow.svg";
import { ReactComponent as SwiperLeftArrowIcon } from "../../assets/svg/swiperLeftArrow.svg";

import { register } from "swiper/element/bundle";
// import CardsSale from "../Cards_sale/Cards_sale.jsx";
import Card from "components/Card/Card";
import { Container } from "../../main.styled";
import {
  StyledNavigationNextBtn,
  StyledNavigationPrevBtn,
  SwiperContainer,
} from "./ProductSlider.styled";

register();

const ProductSlider = props => {
  const cardSlider = true;

  return (
    <Container>
      <SwiperContainer>
        <StyledNavigationPrevBtn className="nav-btn custom-prev-button">
          <SwiperLeftArrowIcon />
        </StyledNavigationPrevBtn>

        <StyledNavigationNextBtn className="nav-btn custom-next-button">
          <SwiperRightArrowIcon />
        </StyledNavigationNextBtn>
        <swiper-container
          className="swiper-wrapper"
          slides-per-group={3}
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination`,
            el: ".swiper-pagination",
          }}
          loading="lazy"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 2,
              spaceBetween: 24,
            },

            1440: {
              slidesPerView: 3,
              spaceBetween: 89,
            },
          })}
          style={{
            "--swiper-pagination-color": "var(--black-bg-color)",

            "--swiper-pagination-bullet-inactive-color":
              "var(--grey-text-color)",

            //   "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bottom": "27.5px",
            // "--swiper-pagination-bullet-size": "12px",
            // "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          scrollbar="false"
        >
          {props.products && props.products.length > 0
            ? props.products.map(el => {
                return (
                  <swiper-slide class="swiper-slide" key={el._id}>
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
            : null}
          Loading...
        </swiper-container>
        {/* <div className="swiper-pagination"></div> */}
      </SwiperContainer>
    </Container>
  );
};

export default ProductSlider;
