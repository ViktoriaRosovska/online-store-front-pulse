import styled, { keyframes } from "styled-components";

const loading = keyframes`
0% {
    background-color: rgba(20, 20, 20, 1);
}
100% {
    background-color: rgba(20, 20, 20, 0.5);
}
`;

const StyledLoaderWrapper = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  justify-content: center;
  height: 100%;
`;

const StyledPiece = styled.div`
  width: 2px;
  background-color: rgba(20, 20, 20, 0.5);
`;

const StyledFirstPiece = styled(StyledPiece)`
  height: 8px;

  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 0.39s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;

const StyledSecondPiece = styled(StyledPiece)`
  height: 5px;

  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 0.52s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledThirdPiece = styled(StyledPiece)`
  height: 14px;

  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 0.65s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledFourthPiece = styled(StyledPiece)`
  height: 31px;
  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 0.78s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledFifthPiece = styled(StyledPiece)`
  height: 13px;
  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 0.91s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledSixPiece = styled(StyledPiece)`
  height: 32px;
  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 1.04s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledSeventhPiece = styled(StyledPiece)`
  height: 9px;
  animation-name: ${loading};
  -webkit-animation-name: ${loading};

  animation-duration: 1.9s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  animation-delay: 1.17s;
  /* -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s; */
`;
const StyledLoaderPosition = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  StyledLoaderWrapper,
  StyledFirstPiece,
  StyledSecondPiece,
  StyledThirdPiece,
  StyledFourthPiece,
  StyledFifthPiece,
  StyledSixPiece,
  StyledSeventhPiece,
  StyledLoaderPosition,
};
