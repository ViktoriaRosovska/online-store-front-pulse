import styled from "styled-components";

const FavoriteBtn = styled.button`
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--grey-bg-icon-color);
  position: absolute;
  right: 10px;
  top: ${(props) => (props.$sales ? "42px" : "16px")};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    & svg {
      fill: red;
    }
  }
`;

export { FavoriteBtn };
