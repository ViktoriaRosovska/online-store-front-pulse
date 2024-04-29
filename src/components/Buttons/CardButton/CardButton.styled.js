import styled from "styled-components";

import { Link } from "react-router-dom";

const CardButtonWrapper = styled(Link)`
  font-size: 18px;
  line-height: 20px;

  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--white-dark-bg-color);
    color: black;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.01em;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export { CardButtonWrapper };
