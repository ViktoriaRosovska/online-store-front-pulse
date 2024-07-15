import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 36px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 22px;
  }
`;

export const CancelButton = styled.button`
  padding: 16px 32px;
  border-radius: 16px;
  background-color: var(--black-bg-color);
  font-size: 16px;
  line-height: 20px;
  color: var(--white-text-color);
  font-family: "Roboto";
  height: 48px;
  &:hover {
    background-color: var(--white-dark-bg-color);
    color: var(--black-bg-color);
    border: 1px solid transparent;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 30px;
    width: 214px;
    height: 64px;
  }
`;

export const DeleteButton = styled.button`
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid var(--black-bg-color);
  font-family: "Roboto";
  height: 48px;
  &:hover {
    background-color: var(--white-dark-bg-color);
    color: var(--black-text-color);
    border: 1px solid transparent;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 30px;
    width: 214px;
    height: 62px;
  }
`;
