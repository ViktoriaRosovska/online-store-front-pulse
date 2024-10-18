import styled from "styled-components";

const CheckboxListConrtainer = styled.div`
  height: fit-content;
`;

const CheckboxListItems = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;

  width: 95px;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 100%;
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;
const CheckboxListTitle = styled.h3`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
  margin-bottom: 12px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 20px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0;
  }
`;

export { CheckboxListConrtainer, CheckboxListItems, CheckboxListTitle };
