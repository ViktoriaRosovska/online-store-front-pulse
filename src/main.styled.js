import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  border: 1px solid red;

  @media screen and (min-width: 375px) {
    max-width: 375px;
    padding: 0 24px;
  }

  @media screen and (min-width: 375px) and (max-width: 1440px) {
    min-width: 375px;
    max-width: 1440px;
    padding: 0 120px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding: 0 120px;
  }
`;
export { Container };
