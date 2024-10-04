import styled from "styled-components";
import { StyledOrderPaymentWrapper } from "../ShopCartPayment/ShopCartPayment.styled";

const StyledInviteMessage = styled.p`
  display: none;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 33.6px;

  @media screen and (min-width: 1024px) {
    display: block;
    margin-bottom: 24px;
  }
`;
const StyledProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledInfoMessage = styled.p`
  margin-bottom: 24px;
`;

const StyledOrderSuccessfulWrapper = styled(StyledOrderPaymentWrapper)`
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

const StyledConditionWrapper = styled.div`
  @media screen and (min-width: 1024px) and (max-width: 1439.98px) {
    width: 350px;
  }
`;
export {
  StyledInviteMessage,
  StyledProductsListWrapper,
  StyledInfoMessage,
  StyledOrderSuccessfulWrapper,
  StyledConditionWrapper,
};
