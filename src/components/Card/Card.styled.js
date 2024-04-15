import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 152px;

  @media screen and (min-width: 1440px) {
    width: ${props => (props.$cardSlider ? "340px" : "320px")};
  }
`;
const CardImage = styled.img`
  width: 152px;
  height: ${props => (props.$cardSlider ? "167px" : "auto")};
  @media screen and (min-width: 1440px) {
    width: ${props => (props.$cardSlider ? "340px" : "320px")};
    height: ${props => (props.$cardSlider ? "287px" : "auto")};
  }
`;
const ImageWrapper = styled.div`
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
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const TextWrapper = styled.div`
  margin-bottom: 12px;
`;
const CardPrice = styled.span`
  font-family: "Roboto";

  font-size: ${props => (props.$sales ? "20px" : "16px")};

  line-height: ${props => (props.$sales ? "28px" : "20px")};

  color: ${props =>
    props.$sales ? `var(--red-color)` : `var(--black-text-color)`};
`;

const StyledCardPriceWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const StyledCardLink = styled(Link)`
  cursor: pointer;
  display: block;
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
};
