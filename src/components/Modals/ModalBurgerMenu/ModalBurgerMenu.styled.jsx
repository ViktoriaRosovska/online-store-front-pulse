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
  top: 72px;
  left: 0;
  width: clamp(299px, 80%, 320px);
  max-height: calc(100vh - 88px);
  padding: 24px;
  padding-bottom: 24px;
  border: 1px solid var(--grey-text-color);
  border-top: none;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #ffff;
  z-index: 999;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: var(--grey-text-color);
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;
