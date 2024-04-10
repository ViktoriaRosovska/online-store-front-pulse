import styled from "styled-components";

const CheckboxListConrtainer = styled.div``;

const CheckboxListItems = styled.div`
  display: flex;
  gap: 13px;
  flex-direction: column;
  flex-wrap: wrap;
  /* border: 1px solid blue; */
  margin-bottom: 40px;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 100%;
`;
const CheckboxListTitle = styled.h3`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
  @media screen and (min-width: 376px) {
    margin-bottom: 20px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0;
  }
`;

export { CheckboxListConrtainer, CheckboxListItems, CheckboxListTitle };
