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
`;

export const Box = styled.div`
  position: relative;
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--grey-img-bg-color);
  overflow: hidden;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
`;
