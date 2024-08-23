import styled from "styled-components";

const StyledLastSlideWrapper = styled.div`
  height: 167px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: underline;
  @media screen and (min-width: 375px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    height: 286px;
  }
`;

export { StyledLastSlideWrapper };
