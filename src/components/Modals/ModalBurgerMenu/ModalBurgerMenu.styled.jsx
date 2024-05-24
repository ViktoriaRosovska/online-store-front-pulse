import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 42px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(299px, 80%, 320px);
  height: auto;
  padding: 54px 24px 24px;
  border: 1px solid var(--grey-text-color);
  border-top: none;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #ffff;
  z-index: 999;
`;
