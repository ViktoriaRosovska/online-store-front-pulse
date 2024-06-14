import styled from "styled-components";

export const FooterBox = styled.div`
  padding: 48px 0px 52px 0px;
  text-align: start;

  @media screen and (min-width: 1439px) {
    padding: 48px 0px 120px 0px;
  }
`;

export const MobileSocialMediaList = styled.ul`
  display: flex;
  gap: 18px;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;

    &:hover {
      filter: invert(0%) sepia(50%) saturate(7494%) hue-rotate(200deg)
        brightness(127%) contrast(99%);
    }
  }
`;

export const DesktopList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: var(--white-text-color);
  font-size: 20px;
  font-family: "Roboto";
  line-height: 28px;
  letter-spacing: 0em;
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;

  li {
    transition: color 200ms ease-in-out;
    &:hover {
      color: var(--grey-link-hover-footer-color);
    }
  }
`;
