import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 6px;

  @media screen and (min-width: 1440px) {
    gap: 11px;
    margin-bottom: 10px;
  }
`;

export const SumUpBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--grey-text-color);
  color: var(--grey-text-color);

  div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 0;
    border: none;
  }
`;

export const TotalPrice = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: var(--black-text-color);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
