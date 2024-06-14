import styled from "styled-components";
const StyledModalSizeListContainer = styled.div`
  padding: 80px 8px;
  width: 100vw;
  max-width: 375px;
  height: calc(100vh - 140px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 1440px) {
    /* padding: 80px 55px 68px 55px; */
    width: 906px;
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

const StyledCloseBtn = styled.button`
  position: absolute;
  right: 19px;
  top: 80px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    scale: 0.75;
    fill: var(--black-text-color);
  }
  @media screen and (min-width: 1440px) {
    top: 74px;
    right: 55px;
    width: 48px;
    height: 48px;
    & svg {
      scale: 1;
      fill: var(--black-text-color);
    }
  }
  &:hover,
  &:focus {
    & svg {
      fill: rgba(122, 124, 127, 1);
    }
  }
`;
export {
  StyledModalSizeListContainer,
  StyledSizeListTable,
  StyledSizeListTableCaption,
  StyledCloseBtn,
};
