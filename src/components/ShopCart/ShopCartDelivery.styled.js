import { Form } from "formik";
import styled from "styled-components";

const StyledChoiceDeliveryBtn = styled.button`
  border: 1px solid var(--black-bg-color);
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
`;

const StyledDeliveryForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export {
  StyledChoiceDeliveryBtn,
  StyledChoiseVariant,
  StyledChoiceBtnWrapper,
  StyledDeliveryTitle,
  StyledDeliveryForm,
};
