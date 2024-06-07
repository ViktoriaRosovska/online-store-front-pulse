import styled from "styled-components";

export const DetailsWrapper = styled("div")`
  position: relative;
`;

export const DetailsToggleButton = styled("button")`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 33.6px;
`;
