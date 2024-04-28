import styled from "styled-components";
import winterSaleLg from "../../assets/images/winter-sale-lg.png";
import winterSaleSm from "../../assets/images/winter-sale-sm.jpg";

export const SectionBanner = styled.section`
  width: 100%;
  /* height: 590px; */
  border-radius: 36px;
  background-image: url(${winterSaleSm});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    background-image: url(${winterSaleLg});
  }
`;

export const StyledBannerWrapper = styled.div`
  padding: 202px 0 204px 0;
  @media screen and (min-width: 1440px) {
    padding: 170px 0 174px 0;
  }
`;

export const TitleBox = styled.div`
  max-width: 800px;

  > h1 {
    color: #141414;

    font-family: "Strong";
    font-size: 36px;
    font-weight: 400;
    line-height: 50.4px;

    margin-bottom: 36px;
    @media screen and (min-width: 1440px) {
      font-size: 64px;

      font-size: 64px;

      line-height: 76.42px;
    }
  }
`;
export const ButtonWrapper = styled.div`
  width: 277px;
`;
