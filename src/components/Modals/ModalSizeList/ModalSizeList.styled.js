import styled from "styled-components";
const StyledModalSizeListContainer = styled.div`
  padding: 80px 8px;
  width: 100vw;
  height: calc(100vh - 140px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  position: relative;
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
  }
  & tbody > tr:nth-child(odd) {
    background-color: rgba(227, 227, 227, 1);
  }
`;

export { StyledModalSizeListContainer, StyledSizeListTable };
