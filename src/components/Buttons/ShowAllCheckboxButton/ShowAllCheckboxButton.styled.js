import styled from "styled-components";

const ShowAllCheckboxButton = styled.button`
  cursor: pointer;
  font-size: 11px;
  font-family: "Roboto";
  line-height: 24px;
  letter-spacing: 0.5px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-left: 0;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: var(--grey-text-color);

  padding: 0;
  &:hover,
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
    white-space: nowrap;
  }
  @media screen and (min-width: 1440px) {
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-left: 6.5px;
  }
`;
export { ShowAllCheckboxButton };
