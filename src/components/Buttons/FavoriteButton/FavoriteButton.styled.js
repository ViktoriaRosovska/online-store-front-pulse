import styled from "styled-components";
// import LogoLover from "../../../assets/svg/favorites-icon.svg";
const FavoriteBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background-color: var(--grey-bg-icon-color);
  padding: 0;
  position: absolute;
  right: 10px;
  top: ${props => (props.$sales || props.$new ? "36px" : "10px")};

  /* svg {
    fill: ${props =>
    (props.$isFavorite ? "red" : "black")}
  
  } */

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    /* & svg {
      fill: red;
    } */
  }
  & svg {
    scale: 0.775;
  }
  @media screen and (min-width: 1024px) {
    width: 36px;
    height: 36px;
    top: ${props => (props.$sales || props.$new ? "42px" : "16px")};
    align-items: center;
    & svg {
      scale: 1;
    }
  }
`;

export { FavoriteBtn };
