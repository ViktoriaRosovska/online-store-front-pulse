import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    width: 586px;
  }
`;
