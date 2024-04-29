import styled from "styled-components";

const Title = styled.h2`
  font-family: var(--tittle-font);
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0;
    margin-bottom: 36px;
  }
`;

const PageTitle = styled(Title)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export { PageTitle, Title };
