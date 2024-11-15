import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 27px;
  align-items: center;
  margin-bottom: 48px;
  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 64px;
    h2 {
      font-size: 36px;
      line-height: 36px;
    }

    width: 792px;
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

  @media screen and (min-width: 1024px) {
    width: 130px;
    height: 130px;
    img {
      width: 130px;
      height: 130px;
    }
  }
`;

export const GeneratedAvatar = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: var(--white-bg-color-favorite-btn);

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;

  @media screen and (min-width: 1024px) {
    svg {
      scale: 1.35;
    }
  }
`;

export const StyledAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
