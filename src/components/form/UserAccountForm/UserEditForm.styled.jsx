import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var( --black-bg-color);
    color: var(--white-text-color);
    border-radius: 16px;
    padding: 10px;
`