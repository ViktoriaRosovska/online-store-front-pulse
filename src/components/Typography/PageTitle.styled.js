import styled from "styled-components";

export const PageTitle = styled.h2`
  position: absolute;
  /* padding-bottom: 50px; */
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  font-family: var(--tittle-font);
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    position: static;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0;
    /* position: static; */
  }
`;
