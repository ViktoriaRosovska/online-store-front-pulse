import styled, { css } from "styled-components";
import { ReactComponent as SearchMobileIcon } from "/public/icons/search-icon.svg";
import { ReactComponent as CloseSearcSvg } from "../../../../assets/svg/close-mobile-search.svg";

export const CloseSearchIcon = styled(CloseSearcSvg)`
  width: 24px;
  height: 24px;
  stroke: var(--black-text-color);
  ${props =>
    props.$isFixed || !props.$location
      ? css`
          filter: invert(100%) sepia(1%) saturate(5805%) hue-rotate(184deg)
            brightness(116%) contrast(83%);
        `
      : ""}
`;

export const MobileSearchIcon = styled(SearchMobileIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  stroke: var(--grey-text-color);
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchBox = styled.div`
  position: relative;

  button:hover {
    filter: invert(53%) sepia(0%) saturate(798%) hue-rotate(256deg)
      brightness(92%) contrast(86%);
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

  @media screen and (min-width: 1024px) {
    width: 185px;
    height: 45px;
    font-size: 16px;
    padding: 10px 35px 10px 35px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SearchIcon = styled(SearchMobileIcon)`
  stroke: var(--black-text-color);
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
  /* left: 0; */
  top: 10px;
  margin-left: 8px;
  /* margin-top: 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const MobileButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const SearchMobileBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 65px;
  left: 0;
  padding-top: 8px;
  border-radius: 26px;
  padding-bottom: 8px;
  /* background-color: var(--white-bg-color-favorite-btn); */
  /* border-bottom: 0.2px solid var(--white-dark-bg-color); */
  width: 100%;

  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    stroke: var(--grey-text-color);
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Box = styled.div`
  position: relative;
`;

export const MobileInput = styled.input`
  display: block;
  width: calc(100vw - 48px);
  max-width: 326px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 42px;
  padding-right: 36px;
  border-radius: 16px;
  border: 1px solid var(--white-dark-bg-color);
  font-size: 12px;
  /* background-color: transparent; */
`;

export const StyledSearchUserActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 1024px) {
    gap: 16px;
  }
`;
