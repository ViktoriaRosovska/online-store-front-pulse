import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  gap: 40px;
  max-width: 295px;
  padding-right: 15px;
  /* padding-bottom: 50px; */
  padding-bottom: 24px;
  @media screen and (min-width: 375px) {
    gap: 35px;
  }
  @media screen and (min-width: 1024px) {
    width: 450px;
    max-width: 450px;
    padding-bottom: 36px;
  }
`;

export const Button = styled.button`
  font-family: "Roboto";
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--black-bg-color);
  border: 1px solid transparent;

  color: var(--white-text-color);
  border-radius: 16px;
  padding: 10px;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  transition: background-color 200ms ease-out, color 200ms ease-out,
    200ms ease-out;

  &:hover {
    background-color: var(--white-dark-bg-color);
    color: var(--black-bg-color);
  }

  @media screen and (min-width: 1024px) {
    height: 62px;
    font-size: 20px;
  }
`;

export const ForgotPasswordButton = styled.button`
  margin-left: auto;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: underline;

  &:hover {
    color: var(--grey-text-color);
  }
`;
