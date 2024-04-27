import styled, { css } from "styled-components";
import { CommonButton } from "../UIKit/CommonButton/CommonButton.styled";

export const StyledProductInfoWrapper = styled.div`
  padding-bottom: 80px;
  @media screen and (min-width: 1440px) {
    padding-bottom: 120px;
  }
`;

export const MobileHeading = styled("div")`
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ProductTitle = styled("h2")`
  max-width: 236px;
  font-size: 24px;
  line-height: 1.4;
`;

export const ProductArticle = styled("p")`
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.25;

  & > span {
    color: var(--grey-bg-color);
  }

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;

export const ProductDataWrapper = styled("div")`
  margin-top: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: 36px;
    display: flex;
    align-items: start;
    column-gap: 102px;
  }
`;

export const ImagesGrid = styled("div")`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 12px;

  @media screen and (min-width: 1440px) {
    width: 714px;
    column-gap: 32px;
    row-gap: 32px;
  }
`;

export const ImageWraper = styled("div")`
  flex-basis: calc((100% - 24px) / 2);
  height: 146px;
  background-color: gray;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 32px) / 2);
    height: 369px;
  }

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Meta = styled("div")``;

export const DesktopHeading = styled("div")`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const PriceWrapper = styled("p")`
  margin-top: 16px;
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const PriceOld = styled("span")`
  font-size: 16px;
  line-height: 1.25;
  text-decoration: line-through;
  margin-right: 4px;
`;

export const PriceNew = styled("span")`
  font-size: 20px;
  line-height: 1.25;
  color: var(--black-text-color);

  ${p =>
    p.$sale &&
    css`
      color: var(--red-color);
    `};
`;

export const PriceDiscount = styled("span")`
  padding: 0 10px;
  font-size: 20px;
  line-height: 1.4;
  color: var(--white-text-color);
  background-color: var(--red-light-color);
  border-radius: 4px;
`;

export const SizeGridButton = styled("button")`
  margin-top: 12px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: underline;
  border: none;
  display: block;

  color: var(--grey-bg-color);
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.005em;

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const SizeSelectorList = styled("ul")`
  margin-top: 24px;
  display: grid;
  align-items: center;
  column-gap: 32px;
  row-gap: 16px;

  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 22px;
    row-gap: 26px;
  }
`;

export const SizeSelectorItem = styled("li")`
  flex-basis: calc((100% - 32px) / 3);

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 22px) / 4);
  }
`;

export const SizeSelectorLabel = styled("label")`
  cursor: pointer;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20;
  line-height: 1.5;
  letter-spacing: 0.1em;
  border-radius: 16px;
  border: 1px solid var(--grey-bg-color);

  ${p =>
    p.$selected &&
    css`
      background-color: var(--black-bg-color);
      color: var(--white-text-color);
    `};
`;

export const ButtonWrapper = styled("div")`
  margin-top: 24px;
  display: flex;
  align-items: center;
  column-gap: 44px;

  @media screen and (max-width: 1439.98px) {
    justify-content: space-between;
  }
`;

export const AddToCartButton = styled(CommonButton)`
  padding: 9px 0;

  @media screen and (min-width: 1440px) {
    padding: 16px 0;
    width: 282px;
  }
`;

export const FavoriteButton = styled("button")`
  flex-shrink: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: underline;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--grey-bg-icon-color);
  border-radius: 50%;
`;

export const PackageInfoList = styled("ul")`
  margin-top: 24px;
`;

export const PackageInfoItem = styled("li")`
  margin-top: 16px;
  display: flex;
  column-gap: 22px;
  align-items: center;
  color: var(--grey-bg-color);
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 1440px) {
    margin-top: 26px;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const DescriptionWrapper = styled("div")`
  max-width: 709px;
`;

export const DescriptionTitle = styled("h3")`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.4;
  font-weight: 400;
`;

export const DescriptionText = styled("p")`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

export const ProductInfoList = styled("ul")`
  margin-top: 24px;
  list-style-type: disc;
  list-style-position: inside;
`;

export const ProductInfoItem = styled("li")`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.01em;

  &:first-child {
    margin-top: 0;
  }

  & > span {
    margin-left: -5px;
  }
`;
