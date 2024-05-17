import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--modal-backdrop-color);
`;

export const ModalContant = styled.div`
  position: relative;
  background-color: var(--white-light-bg-color);
  padding: 32px 24px;
  border-radius: 36px;
  width: 100%;
  max-width: 343px;

  @media screen and (min-width: 1440px) {
    padding: ${props => props.$padding};
    width: auto;
    max-width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 24px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
    top: ${props => props.$top};
    right: 70px;
    svg {
      width: 24px;
      height: 24px;
      transform: scale(1.5);
    }
  }
`;
