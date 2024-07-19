import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    width: 384px;
    gap: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--black-bg-color);
  color: var(--white-text-color);
  border-radius: 16px;
  padding: 10px;
  font-family: "Roboto";
  height: 48px;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition: background-color 200ms ease-out, color 200ms ease-out,
    border 200ms ease-out;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--white-dark-bg-color);
    color: var(--black-bg-color);
  }

  @media screen and (min-width: 1440px) {
    /* width: 384px; */
    height: 62px;
    font-size: 20px;
  }
`;
