import styled from "styled-components";

const CatalogNavigationWrapper = styled.div`
  /* font-family: "Roboto"; */
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.01em;
  margin-bottom: 24px;
  & a {
    color: var(--grey-text-color);
  }
  @media screen and (min-width: 376px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
    margin-bottom: 36px;
  }
`;

export { CatalogNavigationWrapper };
