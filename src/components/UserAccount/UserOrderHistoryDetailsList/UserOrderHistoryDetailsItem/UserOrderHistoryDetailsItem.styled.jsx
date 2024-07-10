import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--grey-text-color);

  h3 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 10px;
    h3 {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
`;

export const Image = styled.img`
  width: 72px;
  height: 70px;
  border-radius: 16px;
  margin-right: 10px;

  @media screen and (min-width: 1440px) {
    width: 88px;
    margin-right: 15px;
  }
`;

export const InfoContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 1440px) {
    width: 200px;
    margin-right: 70px;
    align-items: center;
  }
`;

export const Quantity = styled.p`
  @media screen and (min-width: 1440px) {
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Size = styled.p`
  color: var(--grey-text-color);
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
