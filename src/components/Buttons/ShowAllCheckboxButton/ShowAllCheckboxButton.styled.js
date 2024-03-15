import styled from "styled-components";

const ShowAllCheckboxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: none;
  color: var(--grey-text-color);
  font-family: "Montserrat"; //вситановити шрифт
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding: 0;
  & :hover,
  &:hover svg {
    color: var(--black-text-color);
    fill: var(--black-text-color);
  }
  & svg {
    fill: var(--grey-text-color);
    align-self: center;
  }
  & span {
    text-decoration: underline;
  }
`;
export { ShowAllCheckboxButton };
