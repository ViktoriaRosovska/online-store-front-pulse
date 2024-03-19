import styled from "styled-components";

export const SectionBanner = styled.section`
  width: 100%;
  height: 590px;
  border-radius: 36px;
  background-image: url("/image/winter-sale-mobile.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-top: 42px;
  padding: 192px 24px;
  margin-top: 120px;

  > div {
    margin-top: 36px;
    margin-right: auto;
  }

  @media screen and (min-width: 378px) {
    background-image: url("/image/Rectangle 17515.png");
  }

  @media screen and (min-width: 768px) {
    padding: 192px 120px;
  }
  @media screen and (min-width: 1440px) {
    padding: 170px 220px;
  }
`;

export const TitleBox = styled.div`
  max-width: 800px;

  > h1 {
    font-family: "Beware", sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #141414;

    @media screen and (min-width: 1440px) {
      font-family: var(--tittle-font);
      font-size: 64px;
    }
  }
`;
export const ButtonWrapper = styled.div`
  width: 277px;
`;
