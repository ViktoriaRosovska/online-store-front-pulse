import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: block;
 text-align: left;
  font-size: 20px;
  line-height: 28px;
  min-width: 111px;
  

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
    padding: 5px 0px;
     text-align: center;
  }
`;
