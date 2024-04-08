import styled from "styled-components";
import Button from "../Buttons/Button.jsx";

const PaginationWrapper = styled.div`
  width: 100%;
`;
const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationBtn = styled(Button)`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 400;
  line-height: 12.19px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: ${props =>
    props.$current
      ? "var(--black-text-color)"
      : "var(--pagination-notactive-color)"};
  border: ${props =>
    props.$current
      ? "0.7px solid var(--black-text-color)"
      : "0.7px solid var(--pagination-notactive-color)"};
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${props => (props.$lastpage ? 0 : "17px")};

  & svg {
    fill: ${props =>
      props.$current
        ? "var(--black-bg-color)"
        : "var(--pagination-notactive-color)"};
  }
  &:hover {
    border-color: ${props =>
      props.$current
        ? "var(--pagination-notactive-color)"
        : "var(--black-bg-color)"};
    color: ${props =>
      props.$current
        ? "var(--pagination-notactive-color)"
        : "var(--black-bg-color)"};
    & svg {
      fill: ${props =>
        props.$current
          ? "var(--pagination-notactive-color)"
          : "var(--black-bg-color)"};
    }
  }
  &:disabled {
    border-color: var(--pagination-notactive-color);
    color: var(--pagination-notactive-color);
    & svg {
      fill: var(--pagination-notactive-color);
    }
    cursor: auto;
  }
`;

const PrevBtn = styled(PaginationBtn)`
  margin-right: 11px;
  margin-left: 0;
  width: 22px;
  height: 22px;
`;
const NextBtn = styled(PaginationBtn)`
  margin-left: 11px;
  margin-right: 0;
  width: 22px;
  height: 22px;
`;

const ElipsisText = styled.span`
  margin-right: 17px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 17.6px;
  cursor: context-menu;
`;

export {
  PaginationWrapper,
  PaginationList,
  PrevBtn,
  NextBtn,
  PaginationBtn,
  ElipsisText,
};
