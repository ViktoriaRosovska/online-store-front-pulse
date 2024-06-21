import styled from "styled-components";
import { StyledOrderPaymentWrapper } from "../ShopCartPayment/ShopCartPayment.styled";

const StyledInviteMessage = styled.p`
  display: none;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 33.6px;

  @media screen and (min-width: 1440px) {
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

const StyledOrderSuccessfullWrapper = styled(StyledOrderPaymentWrapper)`
  flex-direction: column-reverse;
  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;
export {
  StyledInviteMessage,
  StyledProductsListWrapper,
  StyledInfoMessage,
  StyledOrderSuccessfullWrapper,
};
