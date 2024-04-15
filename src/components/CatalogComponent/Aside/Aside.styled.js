import styled from "styled-components";

const AsideList = styled.div`
  background-color: white;
  z-index: 101;
  display: ${props => (props.$onAsideShow ? "flex" : "none")};

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 270px;
  width: 327px;
  height: ${props => (props.$valueSize ? "270px" : "fit-content")};
  row-gap: 10px;
  margin-bottom: 24px;
  /* border: 1px solid red; */
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 204px;
    height: 100%;
    margin-bottom: 0;
    row-gap: 0;
  }
`;

export { AsideList };
