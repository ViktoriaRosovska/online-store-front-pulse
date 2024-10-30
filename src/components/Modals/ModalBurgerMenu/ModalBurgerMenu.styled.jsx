import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 1400;
`;

export const Modal = styled.div`
  position: absolute;
  left: 0;
  width: clamp(299px, 80%, 320px);
  max-height: calc(100vh - 10px);
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 75px;
  padding-bottom: 24px;
  border: 1px solid var(--grey-text-color);
  border-top: none;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #ffff;
  z-index: 500;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-button {
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--grey-btn-bg-color);
    border: solid 3px transparent;
    height: 10%;
    border-radius: 20px;
    max-height: 10%;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px transparent;
    height: 10%;
    max-height: 10%;
  }
`;
