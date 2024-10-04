import styled from "styled-components";

export const FooterPages = styled.div`
  > p {
    margin-bottom: 24px;
  }
`;
export const FooterList = styled.ul`
  li {
    margin-bottom: 24px;
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 24px;
    font-size: 16px;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 24px;
    font-size: 20px;

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

export const FooterListNoBottom = styled.ul`
  li {
    margin-bottom: 0px;
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 24px;
    font-size: 16px;
  }

  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const FooterListNoMarker = styled.ul`
  li {
    margin-bottom: 24px;
    list-style-type: none;
    margin-left: 0px;
    font-size: 16px;
  }
`;

export const FooterItem = styled.li`
  > li {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 240px;
  }

  > p {
    margin-top: 8px;
  }
  > span {
    font-weight: 700;
  }
`;

export const StyledConditionHeader = styled.h3`
  font-weight: 500;
  margin-bottom: 24px;
  font-size: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const StyledSubHeader = styled.h4`
  font-weight: 500;
  margin-bottom: 24px;
  font-size: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;
export const FooterItemBottom = styled.div`
  margin-bottom: 23px;
`;

export const FooterItemText = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
`;

export const StyledPolicyLink = styled.a`
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export const HighlightedWord = styled.span`
  font-weight: bold;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  gap: 24px;
  & img {
    width: 327px;
    height: 327px;
  }
`;

export const FooterSectionSupport = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const FooterSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 61px;

  @media (max-width: 1024px) {
    margin-left: 0px;
  }

  > img {
    margin-bottom: 24px;
    height: fit-content;
  }

  > a {
    margin-top: 60px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const FooterSectionDiv = styled.div`
  &:nth-child(2) {
    margin-bottom: 23px;
  }

  display: flex;
  flex-direction: column;
`;

export const FooterSectionCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhoneNumber = styled.a`
  font-weight: 500;
`;
