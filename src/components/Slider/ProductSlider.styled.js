import styled from "styled-components";

const SwiperContainer = styled.div`
  position: relative;
`;

const StyledNavigationBtn = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 100;
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
  bottom: 0px;
  @media screen and (min-width: 1440px) {
    left: -83px;
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
  }
`;
const StyledNavigationNextBtn = styled(StyledNavigationBtn)`
  right: 0;
  bottom: 0;

  @media screen and (min-width: 1440px) {
    top: ${props => (props.$card ? "150px" : "50%")};
    transform: translateY(-50%);
    right: -83px;
  }
`;
export { SwiperContainer, StyledNavigationPrevBtn, StyledNavigationNextBtn };
