import styled from "styled-components";

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: var(--black-text-color);
  text-align: center;
`;

const StyledBrandCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  /* height: 133px; */
  width: 140px;
  @media screen and (min-width: 375px) {
    width: 152px;
    height: 133px;
  }
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 147px;
  }
`;

const StyledBrandImage = styled.img`
  width: 140px;
  @media screen and (min-width: 375px) {
    width: 152px;
  }

  height: fit-content;
  @media screen and (min-width: 1440px) {
    width: 170px;
  }
`;

const SliderBrandsWrapper = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 147px;
  }
`;

const StyledMobileBrandList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  @media screen and (min-width: 375px) {
    row-gap: 37px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export {
  StyledBrandCardWrapper,
  StyledBrandImage,
  SliderBrandsWrapper,
  StyledMobileBrandList,
};
