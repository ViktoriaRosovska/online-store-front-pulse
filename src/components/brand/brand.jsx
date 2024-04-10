import  { useState, useEffect } from 'react';

import { Container, NavigationWrapper, Title,Text,Links } from './Brand.styled';
import  {brands}  from './index';

import './swiper.module.css';

export default function BrandsList(props) {
  const [slidesPerView, setSlidesPerView] = useState(5);

  const handleResize = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 320 && window.innerWidth < 768) {
      setSlidesPerView(1);
    } else {
      if (typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1200) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    }
  };

  useEffect(() => {
    handleResize(); // Initial check

    const handleWindowResize = () => {
      handleResize();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  return (
    <Container>
      <NavigationWrapper>
        <a href="./">Головна</a> <span>/</span> <span>{props.title}</span>
      </NavigationWrapper>
      <Title>Бренди</Title>
<div className="swiper ">
      <swiper-container
        spaceBetween={10}
        navigation={true}
        slides-per-view={slidesPerView}
        loading="lazy"
        style={{
          "--swiper-button-prev-right": "auto",
          "--swiper-button-next-background-image": "url(/icons/White Circular Buttons.png)",
          "--swiper-navigation-color": "black",
        }}
        scrollbar="false"
      >
        {brands["id"].map((index) => {
          return (
            <swiper-slide class="swiper" key={index}>
<Links to={`/catalog?${brands["title"][index - 1]}`}>
                <img src={brands["img"][index - 1]} alt={brands["title"][index - 1]} width={149} height={101} loading="eager" />
                    <Text >
                      {brands["title"][index - 1]}
                    </Text>
</Links>
            </swiper-slide>
          );
        })}
        ...
      </swiper-container>
    </div>

  </Container>  );
}