import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 78px;
  border: 1px solid var(--black-bg-color);
  border-radius: 16px;
  padding: 11px 21px 12px 18px;
  font-size: 12px;
   line-height: 12px;

  @media screen and (min-width: 1440px) {
    width: 894px;
    padding: 22px 40px 16px 43px;
    height: 88px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;

  gap: 19px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 1.5px;
    height: 100%;
    left: -8px;
    background-color: #34a853;
  }

  @media screen and (min-width: 1440px) {
    gap: 68px;

    &::before {
        top: -15px;
        left: -28px;
        height: 72px;
    }
  }
`;

export const Info = styled.div`
  width: 128px;

  @media screen and (min-width: 1440px) {
    width: 420px;
  }
`;

export const OrderNumber = styled.p`
  color: var(--grey-text-color);
  margin-bottom: 7px;
 

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.p`
@media screen and (min-width: 1440px) {
   font-size: 14px;
  }  
`

export const SumUp = styled.div`
  color: var(--grey-text-color);
  margin-bottom: 7px;

   @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 1440px) {
   flex-direction: row;
   justify-content: flex-end;
   width: 139px;
   gap: 5px;
   overflow-x: auto;
   /* overflow-y: hidden; */
  }  
`;

export const Image = styled.img`
  width: ${({ $count }) => ($count === 1 ? "43px" : "32px")};
  height: ${({ $count }) => ($count === 1 ? "35px" : "25px")};
  margin-bottom: ${({ $count }) => ($count > 1 ? "2px" : "0")};
  border-radius: 10px;
  object-fit: cover;

   @media screen and (min-width: 1440px) {
   width: 43px;
   height: 35px;
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
