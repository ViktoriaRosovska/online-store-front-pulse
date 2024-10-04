import styled from "styled-components";

const StyledOrderDateInfoWrapper = styled.div`
  border: 1px solid var(--black-bg-color);
  border-radius: 16px;
  padding: 27px 16px 12px 16px;
  display: flex;
  gap: 11px;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    width: 350px;
    padding: 31px 31px 16px 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 486px;
    padding: 31px 31px 16px 16px;
  }
`;

const StyledImageWrapper = styled.div`
  width: 112px;
  height: 137px;
  border-radius: 16px;
  overflow: hidden;
  & img {
    border-radius: 16px;
    /* width: 112px; */
    height: 137px;
    object-fit: cover;
  }
  @media screen and (min-width: 1440px) {
    width: 112px;
    height: 101px;
    & img {
      width: 112px;
      height: 101px;
    }
  }
`;
const StyledTextInfoWrapper = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 172px;
  @media screen and (min-width: 1024px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 316px;
  }
`;

const StyledDate = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;

const StyledTextPlacement = styled.p`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 185px;
  }
`;
export {
  StyledImageWrapper,
  StyledOrderDateInfoWrapper,
  StyledTextInfoWrapper,
  StyledDate,
  StyledTextPlacement,
};
