import styled from "styled-components";

const PageSection = styled.section`
  padding-top: 114px;
  padding-bottom: 80px;
  /* border: 1px solid green; */
  @media screen and (min-width: 1440px) {
    padding-bottom: 120px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-bottom: 120px;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
  /* border: 1px solid red; */

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 120px;
  }
`;
export { PageSection, ContentWrapper, Container };
