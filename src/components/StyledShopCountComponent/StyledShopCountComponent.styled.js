import styled from "styled-components";

const StyledCountWrapper = styled.div`
  position: absolute;
  font-family: "Roboto";
  background-color: var(--yellow-color);
  /* color: var(--grey-text-color); */
  border-radius: 15px;
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  right: -10px;
  top: -10px;
  overflow: hidden;
  &:hover {
    background-color: var(--yellow-color);
  }
`;

export { StyledCountWrapper };
