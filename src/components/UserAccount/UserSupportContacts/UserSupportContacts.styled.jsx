import styled from "styled-components";

export const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 36px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  gap: 24px;
  list-style-type: disc;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    width: 870px;
    height: 96px;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  p {
    font-size: 14px;
    line-height: 14px;
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(-n + 2) {
      width: 465px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const PhoneNumber = styled.a`
  &:nth-child(2) {
    display: block;
  }
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 1440px) {
    /* line-height: 22px; */
    &:nth-child(2) {
      display: inline;
    }
  }
`;

export const Link = styled.a`
  font-weight: 500;
  line-height: 30px;
  text-decoration: underline;
`;
