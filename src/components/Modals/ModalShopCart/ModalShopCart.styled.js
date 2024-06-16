import styled from "styled-components";
// import { StyledCloseBtn } from "../ModalSizeList/ModalSizeList.styled";

const StyledModalShopCartWrapper = styled.div`
  width: 100%;
  /* min-width: 320px;  */
  /* padding: 32px 24px; */
  @media screen and (min-width: 1440px) {
    width: 803px;
    /* padding: 74px 48px 66px 48px; */
  }
`;
const StyledShopCartContainer = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 42px;
  }
`;

const StyledShopCartImage = styled.img`
  width: 125px;
  height: 156px;
  border-radius: 16px;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    width: 185px;
  }
`;

const StyledShopCartDescription = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  width: 156px;
  @media screen and (min-width: 1440px) {
    width: auto;
  }
`;

const StyledShopCartInfo = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--black-bg-color);
  @media screen and (min-width: 1440px) {
    width: 401px;
    border-bottom: none;
    margin-bottom: 0;
    border-right: 1px solid var(--black-bg-color);
    padding-bottom: 0;
    gap: 21px;
    padding-right: 10px;
  }
`;

const StyledProductTitle = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 8px;
`;

const StyledShopCartTip = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledShopCartRegistration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 374px;
  }
`;

// const StyledCloseBtnShopCart = styled(StyledCloseBtn)`
//   top: 32px;
//   right: 24px;
//   width: 24px;
//   height: 24px;
//   & svg {
//     scale: 0.5;
//   }
//   @media screen and (min-width: 1440px) {
//     top: 68px;
//     right: 51px;
//     width: 48px;
//     height: 48px;
//     & svg {
//       scale: 1;
//     }
//   }
// `;
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
  // StyledCloseBtnShopCart,
};
