import styled, { css } from "styled-components";

export const SearchBox = styled.div`
  position: relative;

  button:hover {
    filter: invert(53%) sepia(0%) saturate(798%) hue-rotate(256deg)
      brightness(92%) contrast(86%);
  }

  @media screen and (min-width: 1440px) {
    button {
      position: absolute;
      left: 0;
      margin-left: 10px;
      margin-top: 13px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100px;
  height: 28px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--black-text-color);
  font-size: 12px;
  line-height: 20;
  padding: 0px 8px 0 30px;
  outline: none;

  ${props =>
    props.$isFixed || !props.$location
      ? css`
          border: 1px solid var(--white-text-color);
          color: var(--white-text-color);
        `
      : ""}

  @media screen and (min-width: 1440px) {
    width: 185px;
    height: 45px;
    font-size: 16px;
    padding: 0px 10px 0 30px;
    padding: 0px 16px 0 35px;
  }
`;

export const SearchIcon = styled.img`
  ${props =>
    props.$isFixed || !props.$location
      ? css`
          filter: invert(100%) sepia(1%) saturate(5805%) hue-rotate(184deg)
            brightness(116%) contrast(83%);
        `
      : ""}
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 0;
  margin-left: 8px;
  margin-top: 5px;
`;

export const MobileButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
