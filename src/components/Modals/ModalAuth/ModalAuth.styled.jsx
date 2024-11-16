import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: ${props => (props.$login ? "flex-start" : "flex-end")};
  padding: ${props => (props.$login ? "20px 24px 10px " : "20px 30px 10px ")};
  font-size: 24px;
  line-height: 24px;
  font-family: "Strong";
  margin-bottom: 24px;
  width: ${props => (props.$login ? "100px" : "100%")};
  color: ${props =>
    props.$active ? "var(--black-text-color)" : "var(--grey-text-color)"};
  border-bottom: 1px solid
    ${props =>
      props.$active ? "var(--black-text-color)" : "var(--grey-text-color)"};

  @media screen and (min-width: 1024px) {
    padding: 14px 20px 14px;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const Register = styled.button`
  font-size: 16px;
  font-family: "Roboto";
  line-height: 20px;
  text-decoration: underline;

  &:hover {
    color: var(--grey-text-color);
  }
`;

export const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  margin-right: 15px;

  @media screen and (min-width: 1024px) {
    margin-top: 36px;
  }
`;

export const OrText = styled.p`
  font-size: 20px;
  line-height: 28px;
  padding: 0 19px;
  color: var(--grey-text-color);

  @media screen and (min-width: 1440px) {
    padding: 0 12px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: var(--grey-text-color);
`;

export const SocialBox = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: center;
  padding-right: 15px;
  gap: 24px;
  & a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 1024px) {
    gap: 32px;

    & svg {
      scale: 1.4;
    }
    & a {
      width: 40px;
      height: 40px;
    }
  }
`;
export const StyledFormWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 400px;
  scrollbar-width: 2px;
  scrollbar-color: var(--grey-btn-bg-color);
  &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid transparent;
    position: absolute;
  }
  &::-webkit-scrollbar-button {
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--grey-btn-bg-color);
    border: solid 1px transparent;
    height: 10%;
    border-radius: 20px;
    max-height: 10%;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px transparent;
    border: solid 6px transparent;
    height: 10%;
    max-height: 10%;
  }
`;
