import styled from "styled-components";
const StyledModalSizeListContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: fit-content;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    max-width: 906px;
  }
`;

const StyledSizeListTable = styled.table`
  border-collapse: collapse;

  border: 1px solid rgba(122, 124, 127, 1);
  & th,
  td {
    border-bottom: 1px solid rgba(122, 124, 127, 1);
    border-right: 1px solid rgba(122, 124, 127, 1);
    text-align: center;
    vertical-align: middle;
    width: 90px;
    height: 40px;
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    @media screen and (min-width: 1440px) {
      width: 199px;
    }
  }
  & tbody > tr:nth-child(odd) {
    background-color: rgba(227, 227, 227, 1);
  }
`;

const StyledSizeListTableCaption = styled.caption`
  margin-bottom: 36px;
  font-family: "Strong";
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  @media screen and (min-width: 1440px) {
    margin-bottom: 83px;
  }
`;

export {
  StyledModalSizeListContainer,
  StyledSizeListTable,
  StyledSizeListTableCaption,
};
