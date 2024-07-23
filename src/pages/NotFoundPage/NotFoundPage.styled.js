import styled from "styled-components";

const StyledNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledNotFoundText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 33.6px;
`;

const StyledNotFoundContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: 1440px) {
    width: 384px;
    padding-top: 183px;
  }
`;
export { StyledNotFoundWrapper, StyledNotFoundText, StyledNotFoundContent };
