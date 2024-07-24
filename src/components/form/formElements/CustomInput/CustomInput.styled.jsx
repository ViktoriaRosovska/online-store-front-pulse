import MaskedInput from "react-text-mask";
import styled from "styled-components";

export const Box = styled.div`
  /* position: relative; */
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
  /* border: none; */
  flex-grow: 1;
  font-size: 16px;
  line-height: 125%;
  height: 48px;
  width: 100%;
  border: 1px solid
    ${props => (props.$isError ? "red" : "var(--black-text-color)")};
  border-radius: 16px;
  padding: 14px 16px;
  ${props =>
    props.$isPassword &&
    `
     padding-right: 38px;
   `}
  &::placeholder {
    font-size: 16px;
    line-height: 125%;
    color: gray;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    /* width: 384px; */
    padding: 18px 16px;
    ${props =>
      props.$isPassword &&
      `
     padding-right: 38px;
   `}
  }
`;

export const StyledMaskedInput = styled(MaskedInput)`
  flex-grow: 1;
  font-size: 16px;
  line-height: 125%;
  height: 48px;
  width: 100%;
  border: 1px solid
    ${props => (props.$isError ? "red" : "var(--black-text-color)")};
  border-radius: 16px;
  padding: 14px 16px;
  ${props =>
    props.$isPassword &&
    `
     padding-right: 38px;
   `}
  &::placeholder {
    font-size: 16px;
    line-height: 125%;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    /* width: 384px; */
    padding: 18px 16px;
    ${props =>
      props.$isPassword &&
      `
     padding-right: 38px;
   `}
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  textarea {
    font-family: "Roboto";
    color: var(--black-bg-color);
    font-size: 16px;
    height: 107px;
    padding: 12px 16px;
    outline: none;
    flex-grow: 1;
    font-size: 16px;
    line-height: 125%;
    width: 100%;
    border-radius: 16px;

    &::placeholder {
      font-family: "Roboto";
      font-size: 16px;
      line-height: 125%;
    }
  }
  /* height: 48px; */
  /* border: 1px solid var(--black-text-color); */
  /* border-radius: 16px; */
  /* padding: 14px 16px; */
  /* ${props =>
    props.$isPassword &&
    `
    padding: 12px 10px;
   `} */

  @media screen and (min-width: 1440px) {
    textarea {
      height: 144px;
      padding: 11px;
    }
  }
`;

export const StyledPassIconWrapper = styled.div`
  position: absolute;
  right: 16px;
`;

export const Error = styled.p`
  position: absolute;
  color: red;
  left: 0;
  bottom: -20px;
  font-size: 10px;
  margin-top: 4px;

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    /* top: 88px; */
  }
`;
