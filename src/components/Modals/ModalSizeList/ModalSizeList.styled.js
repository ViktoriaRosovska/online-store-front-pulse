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
    height: 40px;
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 400;
    line-height: 33.6px;
    @media screen and (min-width: 1024px) {
      width: 199px;
    }
  }
  & tr {
    width: 100%;
  }
  & td {
    @media screen and (max-width: 1023.98px) {
      width: 70px;
    }
    @media screen and (min-width: 1024px) {
      width: calc(797px / 4);
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

  overflow-y: auto;
  /* border: 1px solid red; */
  & td:last-child {
  }
  @media screen and (max-width: 1023.98px) {
    width: 295px;
  }
  @media screen and (min-width: 1024px) {
    width: 797px;
    & th {
      width: calc(797px / 4);
    }
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
    width: 5px;
    border: 1px solid transparent;
    position: absolute;
  }
  &::-webkit-scrollbar-button {
    background-color: transparent;
    height: 90px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--grey-btn-bg-color);
    border: solid 1px transparent;
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
      width: 295px;
    }
  }
  & td {
    @media screen and (max-width: 1023.98px) {
      width: calc(300px / 4);
    }
  }
  & td:not(:last-child) {
    @media screen and (max-width: 1023.98px) {
      width: 70px;
    }
  }
  & td:last-child {
    @media screen and (max-width: 1023.98px) {
      width: 90px;
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
