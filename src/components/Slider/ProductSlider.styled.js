import styled from "styled-components";

const SwiperContainer = styled.div`
  position: relative;
  height: 480px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    height: 416px;
  }

  @media screen and (min-width: 1024px) {
    height: 486px;
  }
  @media screen and (min-width: 1440px) {
    height: 486px;
  }
`;

const StyledNavigationBtn = styled.button`
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 300;
  user-select: none;
  stroke: var(--black-text-color);
  cursor: pointer;
  &:hover {
    & svg {
      stroke: var(--grey-text-color);
    }
  }
`;

const StyledNavigationPrevBtn = styled(StyledNavigationBtn)`
  left: 0;

  /* @media screen and (min-width: 375px) { */
  bottom: 0px;
  /* } */
  @media screen and (min-width: 1024px) {
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
    left: 0px;
  }
  @media screen and (min-width: 1440px) {
    left: -83px;
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
  }
`;
const StyledNavigationNextBtn = styled(StyledNavigationBtn)`
  right: 0;
  /* @media screen and (min-width: 375px) { */
  bottom: 0px;
  /* } */

  @media screen and (min-width: 1024px) {
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
    right: 0px;
  }
  @media screen and (min-width: 1440px) {
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
    right: -83px;
  }
`;
export { SwiperContainer, StyledNavigationPrevBtn, StyledNavigationNextBtn };
