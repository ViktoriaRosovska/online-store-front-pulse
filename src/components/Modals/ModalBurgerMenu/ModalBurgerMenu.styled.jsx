import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 42px;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
position: relative;
  width: 80%;
  height: auto;
  padding: 54px 28px 42px;
  border: 1px solid var(--grey-text-color);
  border-top: none;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #ffff;
  z-index: 999;
`;
