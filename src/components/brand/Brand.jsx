import "swiper/css/grid";
import {
  Text,
  StyledBrandCardWrapper,
  StyledBrandImage,
  SliderBrandsWrapper,
  StyledMobileBrandList,
} from "./Brand.styled";

import "./brandSlider.css";
import { brands } from "./index";
import {
  StyledNavigationNextBtn,
  StyledNavigationPrevBtn,
} from "../Slider/ProductSlider.styled.js";
import { ReactComponent as SwiperRightArrowIcon } from "../../assets/svg/swiperRightArrow.svg";
import { ReactComponent as SwiperLeftArrowIcon } from "../../assets/svg/swiperLeftArrow.svg";
import { Link, useLocation } from "react-router-dom";
import { Container, PageSection } from "../../main.styled";

import Breadcrumbs from "components/Breadcrumbs";
import { Title } from "components/Typography/Typography.styled";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import { useRef } from "react";

export default function BrandsList({ title }) {
  let locationPath = useLocation()?.state?.from;
  const arr = [];
  arr.push(locationPath?.pathname);
  while (locationPath !== undefined) {
    locationPath = locationPath?.state?.from;
    if (locationPath !== undefined) {
      arr.push(locationPath?.pathname);
    } else if (locationPath == undefined) {
      break;
    }
  }
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
    <PageSection>
      <Container>
        <Breadcrumbs current={title} />
        <Title>{title}</Title>

        <SliderBrandsWrapper>
          <Swiper
            className="brands swiper-container"
            modules={[Pagination, Navigation]}
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
            pagination={pagination}
            loop={true}
            loading="lazy"
            breakpoints={{
              1440: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
          >
            <ul>
              {brands && brands.length > 0 ? (
                brands.map(el => {
                  return (
                    <SwiperSlide
                      className="swiper-slide"
                      key={el._id + el.title}
                    >
                      <Link
                        to={`/catalog?brand=${el.title}`}
                        style={{ width: "170px" }}
                      >
                        <StyledBrandCardWrapper>
                          <StyledBrandImage
                            src={el.img}
                            alt={el.title}
                            loading="eager"
                          />
                          <Text>{el.title}</Text>
                        </StyledBrandCardWrapper>
                      </Link>
                    </SwiperSlide>
                  );
                })
              ) : (
                <div>Loading...</div>
              )}
            </ul>
          </Swiper>
          <div className="swiper-navigation">
            <StyledNavigationPrevBtn
              onClick={() => swiperRef.current?.slidePrev()}
              className="nav-btn custom-prev-button"
              $card={false}
            >
              <SwiperLeftArrowIcon />
            </StyledNavigationPrevBtn>

            <StyledNavigationNextBtn
              onClick={() => swiperRef.current?.slideNext()}
              className="nav-btn custom-next-button"
              $card={false}
            >
              <SwiperRightArrowIcon />
            </StyledNavigationNextBtn>
          </div>
        </SliderBrandsWrapper>

        <StyledMobileBrandList>
          {brands.map(el => {
            return (
              <Link key={el.title} to={`/catalog?brand=${el.title}`}>
                <StyledBrandCardWrapper>
                  <StyledBrandImage
                    src={el.img}
                    alt={el.title}
                    loading="eager"
                  />
                  <Text>{el.title}</Text>
                </StyledBrandCardWrapper>
              </Link>
            );
          })}
        </StyledMobileBrandList>
      </Container>
    </PageSection>
  );
}
