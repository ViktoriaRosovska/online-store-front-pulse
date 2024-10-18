import styled from "styled-components";

const CheckboxItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    &::before {
      color: var(--grey-text-color);
    }
  }
  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
  input:checked {
    & + label::before {
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.89571 14L0 7.36383L1.22393 5.70478L4.89571 10.6819L12.7761 0L14 1.65904L4.89571 14Z' fill='%230FA51E'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }
  }
  label {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0.01em;

    &:hover {
      color: var(--grey-text-color);
      &::before {
        color: var(--grey-text-color);
      }
    }
    @media screen and (min-width: 1024px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0.01em;
    }
  }
  label::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid var(--black-text-color);
    margin-right: 7px;
    display: inline-flex;
  }
`;

export { CheckboxItemWrapper };
