import styled from "styled-components";

export const StyledBreadcrumbs = styled("p")`
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: var(--grey-text-color);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CurrentBreadcrumb = styled("span")`
  color: var(--black-text-color);
`;
