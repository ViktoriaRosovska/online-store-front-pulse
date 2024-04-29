import styled from "styled-components";

export const StyledBreadcrumbs = styled("p")`
  font-size: 12px;
  color: var(--grey-text-color);
  margin-bottom: 24px;

  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.01em;

  @media screen and (min-width: 1440px) {
    margin-bottom: 36px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const CurrentBreadcrumb = styled("span")`
  color: var(--black-text-color);
`;
