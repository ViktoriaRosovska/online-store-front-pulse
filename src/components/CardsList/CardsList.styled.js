import styled from "styled-components";

const CardsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardListWrapper = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  row-gap: 24px;

  @media screen and (min-width: 1440px) {
    column-gap: 18px;
    width: 996px;
    justify-content: flex-start;
  }
`;
export { CardsListContainer, CardListWrapper };
