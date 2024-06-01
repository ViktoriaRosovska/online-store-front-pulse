import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
  display: block;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--grey-img-bg-color);
  overflow: hidden;
`;

export const UserCard = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: ${props => (props.$isModal ? "11px" : "54px")};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 210px;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--grey-text-color);
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: var(--grey-text-color);
  }

  svg {
    fill: var(--grey-text-color);
    stroke: var(--grey-text-color);
  }

  &.active {
    p {
      color: var(--black-text-color);
    }

    svg {
      fill: var(--black-text-color);
      stroke: var(--black-text-color);
    }
  }

  &:hover {
    p {
      color: var(--black-text-color);
    }
    svg {
      fill: var(--black-text-color);
      stroke: var(--black-text-color);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 210px;
  padding: 10px;
  /* background-color: var(--white-light-bg-color); */
  border-radius: 4px;
  gap: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--grey-text-color);

  svg {
    fill: var(--grey-text-color);
    stroke: var(--grey-text-color);
  }

  &:hover {
    p {
      color: var(--black-text-color);
    }
    svg {
      fill: var(--black-text-color);
      stroke: var(--black-text-color);
    }
  }
`;
