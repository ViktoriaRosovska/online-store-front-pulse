import styled from "styled-components";

const SharedLayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  flex-grow: 1;
`;
export { SharedLayoutContainer, MainWrapper };
