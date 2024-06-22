import { StyledOrderText } from "components/ShopCart/ShopCart/ShopCart.styled";
import styled from "styled-components";

const StyledModalSuccessfulWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  @media screen and (min-width: 1440px) {
    padding: 30px 30px;
    width: 400px;
  }
`;

const StyledModalOrderText = styled(StyledOrderText)`
  margin-bottom: 24px;
`;
export { StyledModalSuccessfulWrapper, StyledModalOrderText };
