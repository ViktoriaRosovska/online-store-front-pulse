import styled from "styled-components";
import footerBackground from "../../assets/images/footer-background.png";
import { Form } from "formik";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";

const FooterSection = styled.footer`
  background-color: var(--black-bg-color);
  background-image: url(${footerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
`;

const StyledFooterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FooterContainer = styled.div``;

const StyledCustomInputWhite = styled(CustomInput)`
  & div {
    border: 1px solid var(--white-dark-bg-color);
    background-color: transparent;
    color: var(--white-text-color);
    & input {
      &::placeholder {
        color: var(--white-text-color);
      }
    }
  }
`;

export {
  FooterContainer,
  FooterSection,
  StyledFooterForm,
  StyledCustomInputWhite,
};
