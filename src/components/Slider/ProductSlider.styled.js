import styled from "styled-components";

const SwiperContainer = styled.div`
  position: relative;

  /* border: 1px solid red; */
  @media screen and (min-width: 1440px) {
    /* width: 1198px; */
  }
`;

const StyledNavigationBtn = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 100;
`;

const StyledNavigationPrevBtn = styled(StyledNavigationBtn)`
  left: 0;
  bottom: 0px;
  @media screen and (min-width: 1440px) {
    left: -83px;
    bottom: 50%;
    transform: translateY(50%);
  }
`;
const StyledNavigationNextBtn = styled(StyledNavigationBtn)`
  right: 0;
  bottom: 0;

  @media screen and (min-width: 1440px) {
    bottom: 50%;
    transform: translateY(50%);
    right: -83px;
  }
`;
export { SwiperContainer, StyledNavigationPrevBtn, StyledNavigationNextBtn };
