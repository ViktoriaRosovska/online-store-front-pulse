import styled from "styled-components";

const StyledShopCartListItem = styled.li`
  display: ${props => (props.$device === "mobile" ? "block" : "none")};
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    display: ${props => (props.$device === "desktop" ? "block" : "none")};
    margin-bottom: 36px;
  }
`;
const StyledShopCartCardWrapper = styled.div`
  position: relative;
  padding: 34px 16px 10px 16px;
  border: 1px solid var(--black-bg-color);
  border-radius: 16px;
  display: ${props => (props.$device === "desktop" ? "none" : "flex")};
  justify-content: flex-start;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  @media screen and (min-width: 1440px) {
    display: ${props => (props.$device === "mobile" ? "none" : "flex")};
    width: ${props => (props.$showDeliveryPrice ? "486px" : "612px")};
    flex-direction: row;
    gap: 38px;
  }
`;
const StyledShopCartImage = styled.img`
  width: 123px;
  height: 161px;
  border-radius: 16px;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    width: 185px;
    height: 166px;
  }
`;
const StyledProductName = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

const StyledShopCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: auto;
  /* height: 161px; */
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 185px;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: fit-content;
  /* border: 1px solid red; */
  display: flex;

  gap: 9px;
  margin-bottom: 6px;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 31px;
    width: 401px;
  }
`;

const StyledCloseBtnCard = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  top: 10px;
  right: 16px;
  & svg {
    fill: var(--black-bg-color);
  }
  &:hover {
    & svg {
      fill: rgba(122, 124, 127, 1);
    }
  }
  @media screen and (min-width: 1024px) {
    top: 22px;
    right: 24px;
  }
`;

const StyledPageWrapper = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledProductText = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const StyledProductValue = styled.span``;

const StyledOrderWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* border: 1px solid red; */
  @media screen and (min-width: 1024px) {
    width: 384px;
    /* flex-direction: row; */
  }
`;

const StyledOrderTitle = styled.h3`
  text-align: left;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 33.6px;
  margin-bottom: 24px;
`;

const StyledOrderText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledPDVText = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: var(--grey-text-color);
`;

const StyledOrderPriceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 295px;
  }
`;

const StyledShopCartItemCount = styled.span`
  margin-right: 9px;
  margin-left: 9px;
`;

const StyledCountANDPriceWrapper = styled.div`
  display: flex;
  justify-content: ${props =>
    props.$showCloseBtn ? "space-between" : "center"};
`;
const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledChangeCountWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`;
const StyledChangeCountWrapperDesktop = styled(StyledChangeCountWrapper)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    /* padding-left: 213px; */
  }
`;

const StyledYourOrderWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 385px;
  }
  /* margin-bottom: 24px; */
`;

const StyledChangeCountBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  &:hover {
    & svg {
      color: var(--grey-text-color);
    }
  }
`;

const StyledPromocodeWrapper = styled.div`
  position: relative;
  width: 100%;
  /* margin-bottom: 24px; */
  @media screen and (min-width: 1440px) {
    /* margin-bottom: 0; */
  }
`;

const StyledPromocodeCheckWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
`;

const StyledChoiceBtnParagraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export {
  StyledShopCartListItem,
  StyledShopCartCardWrapper,
  StyledShopCartImage,
  StyledProductName,
  StyledShopCartInfo,
  StyledCard,
  StyledCloseBtnCard,
  StyledPageWrapper,
  StyledProductText,
  StyledProductValue,
  StyledOrderWrapper,
  StyledOrderTitle,
  StyledOrderText,
  StyledPDVText,
  StyledOrderPriceTextWrapper,
  StyledShopCartItemCount,
  StyledCountANDPriceWrapper,
  StyledChangeCountWrapper,
  StyledInfoWrapper,
  StyledChangeCountWrapperDesktop,
  StyledChangeCountBtn,
  StyledPromocodeWrapper,
  StyledPromocodeCheckWrapper,
  StyledChoiceBtnParagraphWrapper,
  StyledYourOrderWrapper,
};
