import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  @media screen and (max-width: 374.98px) {
    /* width: 145px; */
    width: 300px;
    height: auto;
  }
  @media screen and (min-width: 375px) {
    width: 152px;
    /* width: ${props => (props.$cardSlider ? "327px" : "152px")}; */
  }
  @media screen and (min-width: 1440px) {
    width: ${props => (props.$cardSlider ? "340px" : "320px")};
  }
`;
const CardImage = styled.img`
  @media screen and (max-width: 374.98px) {
    /* width: 327px; */
    width: ${props => (props.$cardSlider ? "300px" : "300px")};
    height: ${props => (props.$cardSlider ? "250px" : "auto")};
    object-fit: cover;
  }
  @media screen and (min-width: 375px) {
    width: 152px;
    height: ${props => (props.$cardSlider ? "167px" : "auto")};
  }

  @media screen and (min-width: 1440px) {
    width: ${props => (props.$cardSlider ? "340px" : "320px")};
    height: ${props => (props.$cardSlider ? "287px" : "auto")};
  }
`;
const ImageWrapper = styled.div`
  /* @media screen and (max-width: 374.98px) {
    width: 145px;
  } */
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 12px;
`;
const CardTitle = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: var(--black-text-color);
  margin-bottom: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (min-width: 375px) {
    white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const TextWrapper = styled.div`
  margin-bottom: 12px;
`;
const CardPrice = styled.span`
  font-family: "Roboto";

  font-size: ${props => (props.$sales ? "18px" : "16px")};

  line-height: ${props => (props.$sales ? "28px" : "20px")};

  color: ${props =>
    props.$sales ? `var(--red-color)` : `var(--black-text-color)`};

  @media screen and (min-width: 1440px) {
    font-size: ${props => (props.$sales ? "20px" : "16px")};
  }
`;

const StyledCardPriceWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const StyledCardLink = styled(Link)`
  cursor: pointer;
  display: block;
  /* border: 1px solid pink; */
`;

const CardButtonContainer = styled.div`
  font-size: 18px;
  line-height: 20px;

  background-color: var(--black-bg-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--white-dark-bg-color);
    color: black;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.01em;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;
export {
  CardWrapper,
  CardImage,
  ImageWrapper,
  CardTitle,
  TextWrapper,
  CardPrice,
  StyledCardPriceWrapper,
  StyledCardLink,
  CardButtonContainer,
};
