import styled from "styled-components";

const StyledShopCartListItem = styled.li`
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 36px;
  }
`;
const StyledShopCartCardWrapper = styled.div`
  position: relative;
  padding: 34px 16px 10px 16px;
  border: 1px solid var(--black-bg-color);
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledShopCartImage = styled.img`
  width: 123px;
  height: 161px;
  border-radius: 16px;
`;
const StyledProductName = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

const StyledShopCartInfo = styled.div`
  display: block;
  width: auto;
  height: 161px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  gap: 9px;
  margin-bottom: 6px;
  @media screen and (min-width: 1440px) {
  }
`;
export {
  StyledShopCartListItem,
  StyledShopCartCardWrapper,
  StyledShopCartImage,
  StyledProductName,
  StyledShopCartInfo,
  StyledCard,
};
