import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  /* justify-content: space-between; */
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

  @media screen and (min-width: 1440px) {
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
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 36px;
  }
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const Register = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
`;

export const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;

  @media screen and (min-width: 1440px) {
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
  margin-top: 24px;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    margin-top: 36px;
    gap: 32px;
  }
`;
