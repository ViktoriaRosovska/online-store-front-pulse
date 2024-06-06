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

export {
  StyledOrderPaymentWrapper,
  StyledPaymentWrapper,
  StyledRadioGroupWrapper,
};
