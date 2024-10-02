import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  font-family: var(--tittle-font);
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0;
    margin-bottom: 36px;
  }
`;

const PageTitle = styled(Title)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledSliderTitle = styled.h2`
  font-family: "Strong";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 36px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 64px;

    line-height: 64px;
  }
`;

const StyledLinks = styled(Link)`
  text-decoration: underline;

  & a {
    padding: 0;
    margin: 0;
  }
`;

const StyledHoveredLink = styled(Link)`
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export { PageTitle, Title, StyledSliderTitle, StyledLinks, StyledHoveredLink };
