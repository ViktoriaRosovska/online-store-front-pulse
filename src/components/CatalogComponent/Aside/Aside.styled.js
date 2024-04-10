import styled from "styled-components";

const AsideList = styled.div`
  display: flex;
  width: 327px;
  height: 329px;

  border: 1px solid red;
  @media screen and (min-width: 376px) {
    flex-direction: column;
    min-width: 204px;

    height: 100%;
  }
`;

export { AsideList };
