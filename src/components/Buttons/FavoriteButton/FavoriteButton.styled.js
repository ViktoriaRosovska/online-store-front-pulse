import styled from "styled-components";

const FavoriteBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border-radius: 50%;

  background-color: var(--grey-bg-icon-color);

  position: ${props => (props.$productInfo ? "static" : "absolute")};
  right: 10px;
  top: ${props => (props.$sales || props.$new ? "36px" : "10px")};

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    width: 36px;
    height: 36px;
    top: ${props => (props.$sales || props.$new ? "42px" : "16px")};
    align-items: center;
  }
`;

export { FavoriteBtn };
