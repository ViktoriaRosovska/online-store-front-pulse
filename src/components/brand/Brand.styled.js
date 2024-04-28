import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 120px;
`;
export const NavigationWrapper = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: "Roboto";
  letter-spacing: 0;
  margin-bottom: 36px;
  & a {
    color: var(--grey-text-color);
  }
`;
export const Title = styled.h1`
  font-family: var(--tittle-font);
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  margin-bottom: 36px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: var(--black-text-color);
  text-align: center;
`;
// export const Links = styled(Link)``;

const StyledBrandCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 152px;
  height: 133px;
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 147px;
  }
`;

const StyledBrandImage = styled.img`
  width: 152px;
  height: fit-content;
  @media screen and (min-width: 1440px) {
    width: 170px;
  }
`;

const SliderBrandsWrapper = styled.div`
  position: relative;
  /* display: flex; */
  /* border: 1px solid red; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* width: 327px; */

  height: 550px;

  @media screen and (min-width: 1440px) {
    height: 147px;
    /* width: 1198px; */
  }
`;
export { StyledBrandCardWrapper, StyledBrandImage, SliderBrandsWrapper };
