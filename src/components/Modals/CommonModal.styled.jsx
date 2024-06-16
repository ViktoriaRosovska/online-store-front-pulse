import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: ${props => props.$isSizeModal ? '0' : '16px'} ;
  padding-right: ${props => props.$isSizeModal ? '0' : '16px'};
  background-color: var(--modal-backdrop-color);
  overflow: hidden;
  /* z-index: 1001; */
`;

export const ModalContant = styled.div`
  position: relative;
  background-color: var(--white-light-bg-color);
  padding: ${props => props.$isSizeModal ? '80px 8px' : '32px 24px'} ;
  border-radius: 36px;
  width: 100%;
  max-width: ${props => props.$isSizeModal ? '375px' : '343px'} ;
  z-index: 1400;
  margin-top: 16px;
  margin-bottom: 16px;
  max-height: calc(100% - 32px);
  overflow-y: auto;

  @media screen and (min-width: 1440px) {
    padding: ${props => props.$padding};
    width: fit-content;
    max-width: ${props => props.$isSizeModal ? 'fit-content' : '792px'} ;
    overflow-x: hidden;
    /* max-width: 80%; */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.$isSizeModal ? '80px' : '32px'};
  right: 24px;
  width: ${props => props.$isSizeModal ? '36px' : '24px'};
  height: ${props => props.$isSizeModal ? '36px' : '24px'};

  ${props => props.$isSizeModal && css`
    svg {
      width: 24px;
      height: 24px;
      transform: scale(1.5);
    }
  `}

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

  &:hover,
  &:focus {
    & svg {
      fill: rgba(122, 124, 127, 1);
    }
   }
`;
