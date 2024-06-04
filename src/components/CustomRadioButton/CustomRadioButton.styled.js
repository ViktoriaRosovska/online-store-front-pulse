import styled from "styled-components";

const StyledCardIconWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledPayButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--black-bg-color);
  color: var(--white-text-color);
  border-radius: 16px;
  padding: 16px, 32px;
`;

const StyledOuterCircle = styled.div`
  border: 2px solid var(--black-bg-color);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--black-bg-color);
  display: ${props => (props.$selected ? "block" : "none")};
`;
const StyledChoosePaymentWrapper = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 24px;
`;
export {
  StyledCardIconWrapper,
  StyledPayButton,
  StyledInnerCircle,
  StyledOuterCircle,
  StyledChoosePaymentWrapper,
};
