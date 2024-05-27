import styled from "styled-components";

export const Wrapper = styled.div`
  max-height: 666px;
  /* overflow: hidden; */
`

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
`;

export const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  p {
    font-size: 20px;
    color: var(--black-text-color);
    line-height: 28px;
    white-space: nowrap;
    letter-spacing: -0.5px;
  }
`