import styled from "styled-components";

const StyledModalShopCartWrapper = styled.div`
  width: 343px;
  min-width: 320px;
  padding: 32px 24px;
`;

const ModalShopCartTitle = styled.h2`
  font-family: "Strong";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: 1440) {
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
  }
`;

const StyledShopCartImage = styled.img`
  width: 125px;
  height: 156px;
  border-radius: 16px;
  object-fit: cover;
`;

const StyledShopCartDescription = styled.div`
  width: 156px;
`;

const StyledShopCartPosition = styled.div`
  display: flex;
  gap: 12px;
`;
export {
  StyledModalShopCartWrapper,
  ModalShopCartTitle,
  StyledShopCartImage,
  StyledShopCartDescription,
  StyledShopCartPosition,
};
