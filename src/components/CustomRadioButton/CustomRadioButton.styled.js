import { Form } from "formik";
import styled from "styled-components";

const StyledCardIconWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  & button {
    cursor: auto;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const StyledPayButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--black-bg-color);
  color: var(--white-text-color);
  border-radius: 16px;
  padding: 16px, 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.01em;
`;

const StyledOuterCircle = styled.div`
  border: 2px solid var(--black-bg-color);
  border-radius: 50%;
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerCircle = styled.div`
  width: 13px;
  height: 13px;
  border: none;
  border-radius: 50%;
  background-color: var(--black-bg-color);
  display: ${props => (props.$selected ? "block" : "none")};
`;
const StyledChoosePaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 24px;
  cursor: pointer;
  height: 40px;
`;

const StyledCardForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledOfflinePaymentText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;

const StypedOfflinePaymentWrapper = styled.div`
  /* margin-bottom: 80px; */
`;

const StyledOnlinePaymentWrapper = styled.div``;
export {
  StyledCardIconWrapper,
  StyledPayButton,
  StyledInnerCircle,
  StyledOuterCircle,
  StyledChoosePaymentWrapper,
  StyledOnlinePaymentWrapper,
  StyledCardForm,
  StyledOfflinePaymentText,
  StypedOfflinePaymentWrapper,
};
