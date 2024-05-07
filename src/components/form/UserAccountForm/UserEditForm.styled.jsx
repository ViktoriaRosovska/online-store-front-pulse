import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Button = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: var( --black-bg-color);
    color: var(--white-text-color);
    border-radius: 16px;
    padding: 10px;

    ${props =>
    props.$whiteButton &&
    `
    background-color: var(--white-bg-color-favorite-btn);
    color: #000000;
    border: 1px solid var(--black-bg-color);
    margin-top: 16px;
   `}
`