import styled, { keyframes } from "styled-components";
import preloaderIcon from "../../assets/images/preloaderIcon.png";
import preloaderIconSM from "../../assets/images/preloaderIconSM.png";

const shine = keyframes`

  from {
      background-position: 200% center;
    }
  
`;

const StyledPreloadWrapper = styled.div`
  background: var(--black-bg-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledGradientBox = styled.div`
  width: 200px;
  height: 50px;
  mask: url(${preloaderIconSM});
  mask-repeat: no-repeat;
  mask-position: center;
  margin-top: 100px;
  background: linear-gradient(
    to right,
    #fff 20%,
    #959595 40%,
    #959595 60%,
    #fff 80%
  );
  color: #000;

  background-size: 200% auto;
  animation: ${shine} 1s linear infinite;
  @media screen and (min-width: 1024px) {
    width: 800px;
    height: 200px;
    mask: url(${preloaderIcon});
    mask-repeat: no-repeat;
    margin-top: 400px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 554px;
  }
`;

export { StyledPreloadWrapper, StyledGradientBox };
