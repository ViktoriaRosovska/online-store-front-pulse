import { Title } from "components/Typography/Typography.styled";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled.button`
    display: flex;
  align-items: center;
  justify-content: center;
  padding: 33px 61px;
  margin-top: 24px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--black-bg-color);
  color: var(--black-bg-color);
  font-size: 14px;
  letter-spacing: 1%;

  svg {
    margin-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`

export const StyledTitle = styled(Title)`
  width: 221px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 430px;
    margin-bottom: 22px;
    margin-left: 0;
  }
`;
