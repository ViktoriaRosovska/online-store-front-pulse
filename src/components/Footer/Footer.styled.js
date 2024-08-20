import styled from "styled-components";
import footerBackground from "../../assets/images/footer-background.jpg";
import { Form } from "formik";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { HeroButton } from "../../pages/main/MainPage.styled";

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
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 343px;
  }
`;

const FooterContainer = styled.div``;

const StyledCustomInputWhite = styled(CustomInput)`
  /* border: 1px solid var(--white-dark-bg-color); */
  border: ${props =>
    props.$isError ? "1px solid red" : "1px solid var(--white-dark-bg-color)"};

  background-color: transparent !important;
  color: var(--white-text-color) !important;

  &.whiteInput::placeholder {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: var(--white-dark-bg-color);
  }
`;

const StyledFooterButton = styled(HeroButton)`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
`;

export {
  FooterContainer,
  FooterSection,
  StyledFooterForm,
  StyledCustomInputWhite,
  StyledFooterButton,
};
