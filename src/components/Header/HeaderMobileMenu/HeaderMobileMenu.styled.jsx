import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
 text-align: left;
  font-size: 20px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 4px;

  svg {
    width: 20px;
    height: 20px;
    line-height: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-left: 5px;
  }
`