import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigationWrapper = styled.div`
  color: var(--grey-text-color);
  display: flex;
  gap: 3px;

  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.01em;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 36px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--grey-text-color);

  &.active {
    color: var(--black-text-color);
  }
`;
export { StyledNavigationWrapper, StyledNavLink };
