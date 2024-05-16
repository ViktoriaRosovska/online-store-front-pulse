import { Form } from "formik";
import styled from "styled-components";

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