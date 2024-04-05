import styled from "styled-components";
import { CommonButton } from "../UIKit/CommonButton/CommonButton.styled";

export const StyledBreadcrumbs = styled("p")`
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: #7a7c7f;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CurrentBreadcrumb = styled("span")`
  color: #232323;
`;

export const MobileHeading = styled("div")`
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    display: none;
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
`;

export const Meta = styled("div")``;

export const DesktopHeading = styled("div")`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Price = styled("p")`
  margin-top: 16px;
`;

export const SizeGridButton = styled("button")`
  margin-top: 12px;

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;

export const SizeSelectorList = styled("ul")`
  margin-top: 24px;
`;

export const SizeSelectorItem = styled("li")``;

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

export const FavoriteButton = styled("button")``;

export const PackageInfoList = styled("ul")`
  margin-top: 24px;
`;

export const PackageInfoItem = styled("li")`
  margin-top: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: 26px;
  }

  &:last-child {
    margin-top: 0;
  }
`;

export const DescriptionTitle = styled("h3")`
  margin-top: 24px;
`;

export const DescriptionText = styled("p")`
  margin-top: 24px;
`;

export const ProductInfoList = styled("ul")`
  margin-top: 24px;
`;

export const ProductInfoItem = styled("li")`
  margin-top: 24px;

  &:last-child {
    margin-top: 0;
  }
`;
