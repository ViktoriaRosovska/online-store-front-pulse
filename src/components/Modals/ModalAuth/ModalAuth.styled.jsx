import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const Button = styled.button`
  display: flex;
  justify-content: ${props => (props.$login ? "flex-start" : "flex-end")};
  padding: ${props => (props.$login ? "20px 24px 10px " : "20px 30px 10px ")} ;
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
