import { Title } from "components/Typography/Typography.styled";
import styled from "styled-components";

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin-bottom: 24px;
  color: var(--grey-text-color);

  @media screen and (min-width: 1440px) {
    width: 450px;
  }
`;

export const ReturnButton = styled.button`
  display: block;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-decoration: underline;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    margin-top: 36px;
  }
`;
