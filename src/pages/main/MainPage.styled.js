import styled from "styled-components";

export const SectionHero = styled.section`
  background-image: url("../../../image/Rectangle 17516.png");
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
  width: 328px;
  height: 391px;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 70px 24px;

  @media screen and (min-width: 1440px) {
    width: 690px;
    height: 640px;
    padding: 50px 60px;
  }

  > button {
    display: block;
    margin-top: 24px;
    width: 280px;
    height: 48px;
    border-radius: 16px;
    border: none;
    font-size: 20px;
    cursor: pointer;

    @media screen and (min-width: 1440px) {
      margin-top: 32px;
      width: 280px;
      height: 64px;
    }

    &:hover {
      color: var(--grey-text-color);
      background: var(--white-dark-bg-color);
    }
  }
`;

export const BoxHeroTitle = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
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

    @media screen and (min-width: 1440px) {
      font-size: 90px;
      line-height: 1.5;
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
  background-image: url("../../../image/men-mobile.jpg");
  width: 327px;
  height: 280px;
  border-radius: 36px;
  padding-top: 12px;

  @media screen and (min-width: 1440px) {
    background-image: url("../../../image/image 31.png");
    width: 562px;
    height: 280px;
  }
`;

export const WomenBox = styled.div`
  width: 327px;
  height: 280px;
  border-radius: 36px;
  background-image: url("../../../image/women-mobile.jpg");
  padding-top: 12px;

  @media screen and (min-width: 1440px) {
    background-image: url("../../../image/image 30.png");
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

export const SectionNews = styled.section``;

export const VectorBox = styled.div`
  width: 100%;
  > img {
    width: 100%;
  }
`;

export const SliderBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
    to bottom,
    #d9d9d9,
    #e7e7e7,
    #eaeff0,
    #fbfbfb
  );
  width: 100%;
  height: 643px;
  margin-top: -10px;
  text-align: center;

  > h2 {
    font-family: "Beware";
    font-weight: 400;
    font-size: 36px;
    line-height: 1;
    color: #232323;
  }

  @media screen and (min-width: 1440px) {
    > h2 {
      font-family: var(--tittle-font);
      font-size: 64px;
    }
  }
`;

export const SectionSale = styled.section`
  padding-top: 80px;

  > h2 {
    font-family: "Beware", sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 1;
    color: #232323;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;

    > h2 {
      font-family: "Strong", sans-serif;
      font-size: 64px;
    }
  }
`;
