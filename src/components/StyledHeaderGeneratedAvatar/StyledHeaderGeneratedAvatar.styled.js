import styled from "styled-components";

export const StyledHeaderGeneratedAvatar = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${props => props.$color};

  border-radius: 50%;
  font-size: 12px;
  font-family: "Roboto";
  &:hover {
    filter: invert(1);
  }
`;
export const StyledHeaderUserAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    border: ${props => `1.5px solid ${props.$color}`};
  }
`;
