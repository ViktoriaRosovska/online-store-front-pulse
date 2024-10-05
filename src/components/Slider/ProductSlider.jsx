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

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import { useRef } from "react";
import { LastSlideNavigateToCatalog } from "./LastSlideNavigateToCatalog/LastSlideNavigateToCatalog";

const ProductSlider = props => {
  let arr = [];
  if (props.showLastSlide) {
    if (props.products) {
      arr = [...props.products];
      arr?.pop();
    }
  }

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
    <>
      {props?.products?.length && (
        <SwiperContainer>
          <>
            <Swiper
              className="swiper-container"
              modules={[Pagination, Navigation]}
              onBeforeInit={swiper => {
                swiperRef.current = swiper;
              }}
              pagination={pagination}
              loop={props.loop}
              loading="lazy"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                375: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 56,
                  slidesPerGroup: 2,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 89,
                  slidesPerGroup: 3,
                },
              }}
            >
              <ul style={{ position: "relative" }}>
                {props.showLastSlide ? (
                  <>
                    {arr?.length > 0 &&
                      arr?.map(el => {
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
                      })}
                    {!props.isLoading && (
                      <SwiperSlide>
                        <LastSlideNavigateToCatalog to={props.to} />
                      </SwiperSlide>
                    )}
                  </>
                ) : (
                  props?.products &&
                  props.products.length > 0 &&
                  props.products?.map(el => {
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
                )}
              </ul>
            </Swiper>
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
          </>
        </SwiperContainer>
      )}
    </>
  );
};

export default ProductSlider;
