import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 384px; */

  label {
    font-size: 16px;
    line-height: 125%;
  }
`;

export const Input = styled.input`
  border: none;
  flex-grow: 1;
  font-size: 16px;
  line-height: 125%;

  &::placeholder {
    font-size: 16px;
    line-height: 125%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid var(--black-text-color);
  border-radius: 16px;
  padding: 14px 16px;
  ${props =>
    props.$isPassword &&
    `
    padding: 12px 10px;
   `}

    @media screen and (min-width: 1440px) {
    height: 60px;
    width: 384px;
    padding: 18px 16px;
  }
`;
