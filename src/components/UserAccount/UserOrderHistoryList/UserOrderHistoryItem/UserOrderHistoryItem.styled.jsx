import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 78px; */
  border: 1px solid var(--black-bg-color);
  border-radius: 16px;
  padding: 11px 10px 12px 18px;
  font-size: 12px;
  line-height: 12px;

  @media screen and (min-width: 375px) {
    padding: 11px 21px 12px 18px;
  }
  @media screen and (min-width: 1024px) {
    width: 894px;
    padding: 22px 40px 16px 43px;
    /* height: 88px; */
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* gap: 19px; */
  width: 100%;
  margin-right: 12px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 1.5px;
    height: 100%;
    left: -8px;
    background-color: ${props =>
      props.$status != "Оформлений" ? "#34a853" : "var(--grey-text-color)"};
  }

  @media screen and (min-width: 1024px) {
    gap: 68px;

    &::before {
      top: -15px;
      left: -28px;
      height: 95px;
    }
  }
`;

export const Info = styled.div`
  width: 128px;

  @media screen and (min-width: 1024px) {
    width: 420px;
  }
`;

export const OrderNumber = styled.p`
  color: var(--grey-text-color);
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.p`
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const SumUp = styled.div`
  color: var(--grey-text-color);
  margin-bottom: 7px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const ImageThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43px;
  gap: 2px;
  overflow-y: auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    width: 139px;
    gap: 5px;
    overflow-x: auto;
    /* overflow-y: hidden; */
  }
`;

export const Image = styled.img`
  width: 43px;
  height: 35px;

  border-radius: 10px;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    width: 73px;
    height: 65px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  width: 15px;
  /* height: 15px; */
  svg {
    width: 15px;
    height: 15px;
    stroke: var(--grey-text-color);
  }
`;
