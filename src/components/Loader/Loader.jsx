import {
  StyledFifthPiece,
  StyledFirstPiece,
  StyledFourthPiece,
  StyledLoaderWrapper,
  StyledSecondPiece,
  StyledSeventhPiece,
  StyledSixPiece,
  StyledThirdPiece,
} from "./Loader.styled";

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <StyledFirstPiece></StyledFirstPiece>
      <StyledSecondPiece></StyledSecondPiece>
      <StyledThirdPiece></StyledThirdPiece>
      <StyledFourthPiece></StyledFourthPiece>
      <StyledFifthPiece></StyledFifthPiece>
      <StyledSixPiece></StyledSixPiece>
      <StyledSeventhPiece></StyledSeventhPiece>
    </StyledLoaderWrapper>
  );
};
