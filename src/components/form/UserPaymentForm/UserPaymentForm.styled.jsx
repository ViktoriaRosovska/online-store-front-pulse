import { Form, Formik } from "formik";
import styled from "styled-components";

export const Box = styled.div`
  /* width: 100%; */
`;

export const StyledFormik = styled(Formik)`
  width: 295px;

  @media screen and (min-width: 1440px) {
    width: 483px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 295px;

  @media screen and (min-width: 1440px) {
    width: 483px;
    max-width: 483px;
    gap: 22px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    gap: 35px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--black-bg-color);
  color: var(--white-text-color);
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 10px;
  font-family: "Roboto";
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  margin-top: 8px;
  transition: background-color 200ms ease-out, color 200ms ease-out,
    200ms ease-out;

  &:hover {
    background-color: var(--white-dark-bg-color);
    color: var(--black-bg-color);
  }
  height: 48px;
  @media screen and (min-width: 1440px) {
    /* width: 384px; */
    margin-top: 7px;
    height: 62px;
    font-size: 20px;
  }
`;
