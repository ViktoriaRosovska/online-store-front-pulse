import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 295px;

  @media screen and (min-width: 1440px) {
    width: 450px;
    max-width: 450px;
    gap: 22px;
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
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;

  @media screen and (min-width: 1440px) {
    height: 62px;
    font-size: 20px;
  }
`;

export const ForgotPasswordButton = styled.button`
  margin-left: auto;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-decoration: underline;
`;
