import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 894px;
    display: grid;
    grid-template-columns: 612px 1fr;
    column-gap: 38px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 6px;

  @media screen and (min-width: 1440px) {
    gap: 11px;
    margin-bottom: 10px;
    grid-column: 1;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const SumUpBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--grey-text-color);
  color: var(--grey-text-color);

  div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    grid-column: 1;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 0;
    border: none;
    margin-bottom: 0;
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

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-style: normal;
  font-size: 12px;
  line-height: 12px;
  color: var(--grey-text-color);
  @media screen and (min-width: 1440px) {
    grid-column: 2;
    grid-row: 1;
    font-size: 14px;
    line-height: 14px;
  }
`;
