import styled from "styled-components";
// import { Container } from "../../main.styled";

const FooterContainer = styled.div`
  background-color: var(--black-bg-color);
  background-image: url("../../../public/image/footer-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  position: relative;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
`;

export { FooterContainer };
