import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 27px;
  align-items: center;
  margin-bottom: 48px;
  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
    h2 {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;

export const Box = styled.div`
  position: relative;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--grey-img-bg-color);
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 130px;
    height: 130px;
  }
`;

export const GeneratedAvatar = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: var(--white-bg-color-favorite-btn);

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
