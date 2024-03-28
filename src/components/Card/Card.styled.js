import styled from "styled-components";

const CardWrapper = styled.div`
  width: 320px;
`;
const CardImage = styled.img`
  width: 320px;
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
`;
const TextWrapper = styled.div`
  margin-bottom: 12px;
`;
const CardPrice = styled.span`
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) => (props.$sales ? `var(--red-color)` : `var(--black-text-color)`)};
`;

export { CardWrapper, CardImage, ImageWrapper, CardTitle, TextWrapper, CardPrice };
