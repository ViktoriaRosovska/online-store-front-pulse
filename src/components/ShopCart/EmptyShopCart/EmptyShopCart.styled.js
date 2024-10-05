import styled from "styled-components";

const StyledNotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1024px) {
    gap: 36px;
  }
`;

const StyledNotificationText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
  }
`;
const StyledButtonWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 384px;
  }
`;
export {
  StyledNotificationWrapper,
  StyledNotificationText,
  StyledButtonWrapper,
};
