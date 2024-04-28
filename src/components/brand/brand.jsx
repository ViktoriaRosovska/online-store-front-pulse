import "swiper/css/grid";
import {
  // Container,
  NavigationWrapper,
  Title,
  Text,
  StyledBrandCardWrapper,
  StyledBrandImage,
  SliderBrandsWrapper,
} from "./Brand.styled";

import "./brandSlider.css";
import { brands } from "./index";
import {
  StyledNavigationNextBtn,
  StyledNavigationPrevBtn,
} from "../Slider/ProductSlider.styled.js";
import { ReactComponent as SwiperRightArrowIcon } from "../../assets/svg/swiperRightArrow.svg";
import { ReactComponent as SwiperLeftArrowIcon } from "../../assets/svg/swiperLeftArrow.svg";
import { Link } from "react-router-dom";
import { Container, PageSection } from "../../main.styled";
import { register } from "swiper/element";
register();
export default function BrandsList(props) {
  return (
    <PageSection>
      <Container>
        <NavigationWrapper>
          <a href="./">Головна</a> <span>/</span> <span>{props.title}</span>
        </NavigationWrapper>
        <Title>Бренди</Title>
        <SliderBrandsWrapper>
          <StyledNavigationPrevBtn className="nav-btn custom-prev-button">
            <SwiperLeftArrowIcon />
          </StyledNavigationPrevBtn>

          <StyledNavigationNextBtn className="nav-btn custom-next-button">
            <SwiperRightArrowIcon />
          </StyledNavigationNextBtn>
          <swiper-container
            className="swiper-wrapper"
            spaceBetween={10}
            navigation={true}
            loop={true}
            // slides-per-view={slidesPerView}
            loading="lazy"
            // pagination={{
            //   clickable: true,
            //   bulletClass: `swiper-pagination`,
            //   el: ".swiper-pagination",
            // }}
            navigation-next-el=".custom-next-button"
            navigation-prev-el=".custom-prev-button"
            breakpoints={JSON.stringify({
              320: {
                slidesPerView: 2,

                grid: {
                  rows: 3,
                  column: 2,
                  fill: "row",
                },

                spaceBetween: 23,
                slidesPerGroup: 2,
              },

              1440: {
                slidesPerView: 5,
                spaceBetween: 87,
              },
            })}
            style={{
              "--swiper-button-prev-right": "auto",
              "--swiper-navigation-color": "black",
            }}
            scrollbar="false"
          >
            {brands && brands.length > 0 ? (
              brands.map(el => {
                return (
                  <swiper-slide class="swiper-slide" key={el.title}>
                    <Link
                      to={`/catalog?brand=${el.title}`}
                      style={{ width: "170px" }}
                    >
                      <StyledBrandCardWrapper>
                        <StyledBrandImage
                          src={el.img}
                          alt={el.title}
                          // width={149}
                          // height={101}
                          loading="eager"
                        />
                        <Text>{el.title}</Text>
                      </StyledBrandCardWrapper>
                    </Link>
                  </swiper-slide>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </swiper-container>
        </SliderBrandsWrapper>
      </Container>
    </PageSection>
  );
}
