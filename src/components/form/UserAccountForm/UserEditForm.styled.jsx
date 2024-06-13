import { Form } from "formik";
import styled from "styled-components";

export const Box = styled.div`
  position: relative;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    height: 330px;
    width: 797px;
    gap: 30px 26px;
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
  transition: background-color 200ms ease-out, color 200ms ease-out, border 200ms ease-out;

  &:hover {
    background-color: transparent;
    color: var(--black-bg-color);
    border: 1px solid var(--black-bg-color);
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 64px;
    margin-top: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 20px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 10px;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  background-color: transparent;
  color: #000000;
  border: 1px solid var(--black-bg-color);
  margin-top: 16px;
  transition: background-color 200ms ease-out, color 200ms ease-out;

  &:hover {
    background-color: var(--black-bg-color);
    color: var(--white-text-color);
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 64px;
    margin-top: 60px;
    margin-left: auto;
    font-size: 20px;
  }
`;
