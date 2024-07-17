import styled from "styled-components";
import heroBackground from "../../assets/images/hero-background.jpg";
import manBoxLg from "../../assets/images/manBox-lg.png";
import manBoxSm from "../../assets/images/manBox-sm.jpg";
import womanBoxLg from "../../assets/images/woman-main-lg.png";
import womanBoxSm from "../../assets/images/woman-main-sm.png";

export const SectionHero = styled.section`
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 195px;
  width: 100%;
  height: 812px;
  bottom: 20px;
  position: relative;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
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
`;

export const BoxHeroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 178px;

  @media screen and (min-width: 1440px) {
    width: 460px;
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
  padding-top: 14px;
  padding-left: 14px;
  position: relative;

  &:hover,
  &:focus,
  &:active {
    & div > div {
      background-color: var(--black-bg-color);
      color: var(--white-text-color);
      filter: none;
    }
  }
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
  padding-top: 14px;
  padding-left: 14px;

  &:hover,
  &:focus,
  &:active {
    & div > div {
      background-color: var(--black-bg-color);
      color: var(--white-text-color);
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${womanBoxLg});
    width: 562px;
    height: 280px;
  }
`;

export const BoxTitle = styled.div`
  width: fit-content;
  background-color: var(--white-dark-bg-color);
  border-radius: 36px;
  padding: 7px 21.5px;
  display: flex;
  justify-content: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-decoration: underline;

  @media screen and (min-width: 1440px) {
    padding: 16.5px 37px;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--black-bg-color);
    color: var(--white-text-color);
  }
`;

export const SectionNews = styled.section`
  background-image: linear-gradient(
    180deg,
    rgba(229, 229, 229, 1) 0%,
    rgba(231, 231, 231, 0) 97.9%
  );
  padding-bottom: 80px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 120px;
  }
`;

import grayRibbon from "../../assets/images/grayRibbon.png";
import Button from "components/Buttons/Button";

export const VectorBox = styled.div`
  height: 69px;
  background-image: url(${grayRibbon});
  background-size: cover;
  margin-bottom: -2px;
`;

// export const SliderBox = styled.div`
//   margin-left: auto;
//   margin-right: auto;

//   width: 100%;
//   max-width: 1370px;
//   /* height: 643px; */

//   text-align: center;
// `;

export const SectionSale = styled.section`
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1370px;

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
  }
`;
const HeroButton = styled(Button)`
  display: block;

  width: 100%;
  height: 48px;
  border-radius: 16px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background-color: var(--white-dark-bg-color);
  &:hover,
  &:focus {
    color: var(--white-text-color);
    background-color: var(--black-bg-color);
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 64px;
  }
`;

export { HeroButton };
