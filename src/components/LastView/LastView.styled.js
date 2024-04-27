import styled from "styled-components";

const StyledLastViewWrapper = styled.div`
  /* background-color: var(--white-dark-bg-color); */
  background-image: linear-gradient(
    180deg,
    rgba(229, 229, 229, 1) 0%,
    rgba(231, 231, 231, 0.4) 97.9%
  );
  padding: 24px 0;
  /* padding-top: 24px; */
`;

const StyledLastViewTitle = styled.h2`
  text-align: center;

  font-family: "Strong";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 64px;
    margin-bottom: 36px;
  }
`;

export { StyledLastViewWrapper, StyledLastViewTitle };
