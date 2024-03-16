import styled from "styled-components";

const CheckboxListConrtainer = styled.div``;

const CheckboxListItems = styled.div`
  display: flex;
  gap: 13px;
  flex-direction: column;
  /* border: 1px solid blue; */
  margin-bottom: 40px;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0.01;
  line-height: 100%;
`;
const CheckboxListTitle = styled.h3`
  margin-bottom: 20px;
  font-family: "Roboto";
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0;
`;

export { CheckboxListConrtainer, CheckboxListItems, CheckboxListTitle };
