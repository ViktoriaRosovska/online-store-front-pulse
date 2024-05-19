import styled from "styled-components";

export const Box = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.$masterCard ? "27px 32px" : "32px")};
  border-radius: 16px;
  border: 1px solid var(--black-bg-color);
  svg {
    width: 49px;
    height: ${props => (props.$masterCard ? "30px" : "16px")};
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 99px;
      height: ${props => (props.$masterCard ? "56px" : "32px")};
    }
    width: 512px;
    padding: ${props => (props.$masterCard ? "20px 30px" : "32px 30px")};
  }
`;

export const CardInfo = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-left: 36px;
  color: var(--black-bg-color);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    margin-left: 59px;
  }
`;

export const CheckedBox = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 11px;
  right: 32px;
  font-size: 14px;
  line-height: 14px;
  height: 19px;
  color: var(--grey-text-color);

  svg {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 1440px) {
    right: 30px;
  }
`;
