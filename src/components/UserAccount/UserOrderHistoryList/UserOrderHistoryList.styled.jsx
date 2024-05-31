import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 1440px) {
        gap: 24px;
    }
`