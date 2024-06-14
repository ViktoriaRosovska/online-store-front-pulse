import styled from "styled-components";

export const FooterInner = styled.div`
  position: relative;
  padding: 36px 0;

  @media screen and (min-width: 1440px) {
    padding: 48px 0px 24px 0px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MainText = styled.p`
  font-size: 24px;
  line-height: 140%;
  color: var(--white-text-color);
  font-family: var(--tittle-font);
  line-height: 40px;
  letter-spacing: 0em;

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 50px;
  }
`;

export const SecondaryText = styled.p`
  font-size: 24px;
  line-height: 140%;
  color: var(--white-text-color);
  text-align: center;
`;
