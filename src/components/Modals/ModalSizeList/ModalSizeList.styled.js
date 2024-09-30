import styled from "styled-components";
const StyledModalSizeListContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: fit-content;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    max-width: 906px;
  }
  /* @media screen and (min-width: 1440px) {
    max-width: 906px;
  } */
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
    /* width: 70px; */
    height: 40px;
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    @media screen and (min-width: 1024px) {
      width: 199px;
    }
    /* @media screen and (min-width: 1440px) {
      width: 199px;
    } */
  }
  & tr {
    width: 100%;
  }
  & td {
    @media screen and (max-width: 1023.98px) {
      width: 70px;
    }
  }
  & th:not(:last-child) {
    @media screen and (max-width: 1023.98px) {
      width: 70px;
    }
  }
  & th:last-child {
    @media screen and (max-width: 1023.98px) {
      width: 90px;
    }
  }
  & tbody > tr:nth-child(odd) {
    background-color: rgba(227, 227, 227, 1);
  }
  @media screen and (max-width: 1023.98px) {
    width: 300px;
  }
`;

const StyledTHead = styled.thead`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* width: 100%; */

  overflow-y: auto;
  /* border: 1px solid red; */
  & td:last-child {
    /* width: 70px; */
  }
  @media screen and (max-width: 1023.98px) {
    width: 300px;
  }
`;
const StyledTBody = styled.tbody`
  display: flex;
  flex-direction: column;

  max-height: 300px;
  min-height: 200px;
  overflow-y: auto;
  /* border: 1px solid red; */
  @media screen and (max-width: 1023.98px) {
    width: 300px;
  }
  &::-webkit-scrollbar {
    width: 15px;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-button {
    background-color: transparent;
    height: 50px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--grey-btn-bg-color);
    border: solid 6px transparent;
    height: 70%;
    border-radius: 20px;
    max-height: 30%;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px transparent;
    border: solid 6px transparent;
    height: 70%;
    max-height: 70%;
  }
  & tr {
    @media screen and (max-width: 1023.98px) {
      width: 280px;
    }
  }
`;
const StyledSizeListTableCaption = styled.caption`
  margin-bottom: 36px;
  font-family: "Strong";
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    margin-bottom: 83px;
  }
  /* @media screen and (min-width: 1440px) {
    margin-bottom: 83px;
  } */
`;

export {
  StyledModalSizeListContainer,
  StyledSizeListTable,
  StyledSizeListTableCaption,
  StyledTBody,
  StyledTHead,
};
