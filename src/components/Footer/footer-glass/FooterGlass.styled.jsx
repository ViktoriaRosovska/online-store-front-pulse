import styled from "styled-components";

export const FooterBox = styled.div`
  position: relative;
  background: var(--footer-glass-bg-color);
  backdrop-filter: blur(30px);
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  padding: 24px 0;

  @media screen and (min-width: 1440px) {
    padding: 24px 0 17px 0;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 0px 0px 0px;
`;
