import styled from "styled-components";

const CardsListContainer = styled.div`
  width: 100%;
`;
const CardListWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  /* justify-content: space-between; */
  row-gap: 24px;

  @media screen and (min-width: 1440px) {
    column-gap: 18px;
    width: 996px;
  }
`;
export { CardsListContainer, CardListWrapper };
