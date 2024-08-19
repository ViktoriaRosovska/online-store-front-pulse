import styled from "styled-components";

const StyledOrderPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const StyledPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 588px;
  }
`;

const StyledRadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledPaymentPropsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    width: 486px;
  }
`;
export {
  StyledOrderPaymentWrapper,
  StyledPaymentWrapper,
  StyledRadioGroupWrapper,
  StyledPaymentPropsWrapper,
};
