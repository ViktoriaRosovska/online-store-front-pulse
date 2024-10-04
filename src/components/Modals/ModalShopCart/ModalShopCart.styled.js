import styled from "styled-components";
// import { StyledCloseBtn } from "../ModalSizeList/ModalSizeList.styled";

const StyledModalShopCartWrapper = styled.div`
  width: 100%;
  /* min-width: 320px;  */
  /* padding: 32px 24px; */
  @media screen and (min-width: 1024px) {
    width: 803px;
    /* padding: 74px 48px 66px 48px; */
  }
`;
const StyledShopCartContainer = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 27px;
  }
`;

const ModalShopCartTitle = styled.h2`
  font-family: "Strong";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 42px;
  }
`;

const StyledShopCartImage = styled.img`
  width: 110px;
  height: 156px;
  border-radius: 16px;
  object-fit: cover;
  @media screen and (min-width: 375px) {
    width: 125px;
  }
  @media screen and (min-width: 1024px) {
    width: 185px;
  }
`;

const StyledShopCartDescription = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  width: 120px;
  @media screen and (min-width: 375px) {
    width: 156px;
  }
`;

const StyledShopCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--black-bg-color);
  @media screen and (min-width: 1024px) {
    width: 401px;
    border-bottom: none;
    margin-bottom: 0;
    border-right: 1px solid var(--black-bg-color);
    padding-bottom: 0;
    gap: 21px;
    padding-right: 10px;
  }
`;

const StyledProductTitle = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
  width: 120px;

  @media screen and (min-width: 375px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`;

const StyledShopCartTip = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledShopCartRegistration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1024px) {
    width: 374px;
  }
`;

const StyledShopCartProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledShopCartMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export {
  StyledModalShopCartWrapper,
  ModalShopCartTitle,
  StyledShopCartImage,
  StyledShopCartDescription,
  StyledShopCartInfo,
  StyledProductTitle,
  StyledShopCartTip,
  StyledShopCartRegistration,
  StyledShopCartContainer,
  StyledShopCartProductDescriptionWrapper,
  StyledShopCartMainInfo,
};
