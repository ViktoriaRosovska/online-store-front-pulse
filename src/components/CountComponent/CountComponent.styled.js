import styled from "styled-components";

const StyledCountWrapper = styled.div`
  position: absolute;
  font-family: "Roboto";
  background-color: var(--yellow-color);
  /* color: var(--grey-text-color); */
  border-radius: 15px;
  min-width: 22px;
  max-width: fit-content;
  height: 22px;
  padding: 5px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  top: -10px;
  overflow: hidden;
  &:hover {
    background-color: var(--yellow-color);
  }
`;
const StyledFavoriteCountWrapper = styled(StyledCountWrapper)`
  background-color: var(--grey-text-color);
  &:hover {
    background-color: var(--grey-text-color);
  }
`;
export { StyledCountWrapper, StyledFavoriteCountWrapper };
