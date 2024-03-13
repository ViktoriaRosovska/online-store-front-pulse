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
    font-family: "Strong";
    line-height: 1;
    font-weight: 400;
    font-size: 48px;

    @media screen and (min-width: 1440px) {
      font-size: 90px;
      line-height: 1.5;
    }
  }
`;
