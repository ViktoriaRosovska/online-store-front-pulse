import { Form } from "formik";
import styled from "styled-components";
import { StyledOrderWrapper } from "../ShopCart/ShopCart.styled";

const StyledChoiceDeliveryBtn = styled.button`
  border: 1px solid var(--black-bg-color);

  border: ${props =>
    props.$isSelectedBtn
      ? "2px solid var(--black-bg-color)"
      : "1px solid var(--grey-text-color)"};
  border-radius: 16px;
  height: 109px;
  width: 100%;
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 19px;

  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const StyledChoiseVariant = styled.p`
  min-width: 195px;
  padding: 0;
  margin: 0;
  text-align: left;
  font-weight: ${props => (props.$isSelectedBtn ? "500" : "400")};
  line-height: ${props => (props.$isSelectedBtn ? "22.4px" : "20px")};
  height: 44px;
`;

const StyledChoiceBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledDeliveryTitle = styled.h3`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: center;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 33.6px;
    text-align: left;
  }
`;

const StyledDeliveryForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 587px;
  }
`;

const StyledOrderDeliveryWrapper = styled(StyledOrderWrapper)`
  flex-direction: column-reverse;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 126px;
  }
`;

const StyledDeliveryOrderWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const StyledPromoCodeForm = styled.form`
  /* margin-bottom: 24px; */

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 385px;
  }
`;

const StyledLoginFormNameBtn = styled.p`
  color: ${props =>
    props.$isActiveForm
      ? "var(--black-text-color)"
      : "var( --grey-text-color)"};
  cursor: pointer;
`;
const StyledCheckboxLabel = styled.label`
  display: flex;
  height: 30px;
  align-items: center;
  gap: 3px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
`;

const StyledCheckboxWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 300px;
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

const StyledSelectLabel = styled.label`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* width: 100%; */
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    & div {
      width: 280px;
    }
  }
`;

export {
  StyledLoginFormNameBtn,
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
  StyledChoiceBtnWrapper,
  StyledDeliveryTitle,
  StyledDeliveryForm,
  StyledOrderDeliveryWrapper,
  StyledDeliveryOrderWrapper,
  StyledPromoCodeForm,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledSelectLabel,
  StyledSelectWrapper,
  StyledNameWrapper,
};
