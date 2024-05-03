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
import { register } from "swiper/element";
import Breadcrumbs from "components/Breadcrumbs";
import { Title } from "components/Typography/Typography.styled";

register();
export default function BrandsList(props) {
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

  return (
    <PageSection>
      <Container>
        <Breadcrumbs current={props.title} />
        <Title>{props.title}</Title>

        <SliderBrandsWrapper>
          <StyledNavigationPrevBtn
            className="nav-btn custom-prev-button"
            $card={false}
          >
            <SwiperLeftArrowIcon />
          </StyledNavigationPrevBtn>

          <StyledNavigationNextBtn
            className="nav-btn custom-next-button"
            $card={false}
          >
            <SwiperRightArrowIcon />
          </StyledNavigationNextBtn>

          <swiper-container
            class="swiper-wrapper"
            spaceBetween={10}
            navigation={true}
            loop={true}
            loading="lazy"
            navigation-next-el=".custom-next-button"
            navigation-prev-el=".custom-prev-button"
            slides-per-view={5}
            space-between={87}
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
