import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container=styled.div`
padding:120px 120px;
`
export const NavigationWrapper = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: "Roboto";
  letter-spacing: 0;
  margin-bottom: 36px;
  & a {
    color: var(--grey-text-color);
  }
`;
export const Title= styled.h1`
font-family: var(--tittle-font);
font-weight: 400;
font-size: 36px;
line-height: 100%;
letter-spacing: 0;
margin-bottom:36px;
text-align:center;`

export const Text= styled.p`
font-family: "Roboto";
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: var(--black-text-color);
    margin-top: 12px;
    text-align:center;
    `
    export const Links= styled(Link)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center:
    `


