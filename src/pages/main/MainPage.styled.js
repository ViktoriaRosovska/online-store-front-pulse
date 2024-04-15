import styled from "styled-components";
import heroBackground from "../../assets/images/hero-background.png";
import manBoxLg from "../../assets/images/manBox-lg.png";
import manBoxSm from "../../assets/images/manBox-sm.jpg";
import womanBoxLg from "../../assets/images/womanBox-lg.png";
import womanBoxSm from "../../assets/images/womanBox-sm.jpg";

export const SectionHero = styled.section`
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 195px;
  width: 100%;
  height: 812px;
  bottom: 20px;
  position: relative;

  @media screen and (min-width: 1440px) {
    height: 1024px;
    padding-top: 185px;
  }
`;

export const BoxHero = styled.div`
  width: 100%;
  height: 391px;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 70px 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 690px;
    height: 644px;
    padding: 50px 60px;
    margin-left: 0;
  }

  > button {
    display: block;

    width: 100%;
    height: 48px;
    border-radius: 16px;
    border: none;
    font-size: 20px;
    cursor: pointer;

    @media screen and (min-width: 1440px) {
      width: 280px;
      height: 64px;
    }

    &:hover {
      color: var(--grey-text-color);
      background: var(--white-dark-bg-color);
    }
  }
`;

export const BoxHeroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 178px;

  @media screen and (min-width: 1440px) {
    width: 570px;
    height: 412px;
  }

  > h1 {
    color: white;
    font-family: var(--tittle-font);
    line-height: 1;
    font-weight: 400;
    font-size: 48px;
    margin-bottom: 24px;

    @media screen and (min-width: 1440px) {
      font-size: 90px;
      line-height: 1.5;
      margin-bottom: 32px;
    }
  }
`;

export const SectionManWomen = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  @media screen and (max-width: 1439px) {
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
    padding-bottom: 120px;

    justify-content: space-between;
  }
`;

export const ManBox = styled.div`
  background-image: url(${manBoxSm});
  width: 327px;
  height: 280px;
  border-radius: 36px;
  padding-top: 12px;

  @media screen and (min-width: 1440px) {
    background-image: url(${manBoxLg});
    width: 562px;
    height: 280px;
  }
`;

export const WomenBox = styled.div`
  width: 327px;
  height: 280px;
  border-radius: 36px;
  background-image: url(${womanBoxSm});
  padding-top: 12px;

  @media screen and (min-width: 1440px) {
    background-image: url(${womanBoxLg});
    width: 562px;
    height: 280px;
  }
`;

export const BoxTitle = styled.div`
  width: 186px;
  height: 48px;
  background-color: #e4e4e4;
  border-radius: 36px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    height: 70px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  > h3 {
    line-height: 1;
    display: inline;
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    color: #232323;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2.5px;
      background-color: #232323;
      border-radius: 2px;
      bottom: -3px;
    }
  }
`;

export const SectionNews = styled.section`
  background-image: linear-gradient(
    180deg,
    rgba(229, 229, 229, 1) 0%,
    rgba(231, 231, 231, 0) 97.9%
  );
`;

import grayRibbon from "../../assets/images/grayRibbon.png";

export const VectorBox = styled.div`
  height: 69px;
  background-image: url(${grayRibbon});
  background-size: cover;
  margin-bottom: -2px;
`;

export const SliderBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 1370px;
  height: 643px;

  text-align: center;
`;

export const SectionSale = styled.section`
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1370px;

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
  }
`;

export const StyledSliderTitle = styled.h2`
  font-family: "Strong";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 36px;
  text-align: center;
  @media screen and (min-width: 1440px) {
    font-size: 64px;

    line-height: 64px;
  }
`;
