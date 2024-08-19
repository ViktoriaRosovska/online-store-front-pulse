import { StyledCardLink } from "components/Card/Card.styled";

import { StyledLastSlideWrapper } from "./LastSlideNavigateToCatalog.styled";

export const LastSlideNavigateToCatalog = ({ to }) => {
  return (
    <StyledCardLink to={to}>
      <StyledLastSlideWrapper>
        <span>Переглянути більше...</span>
      </StyledLastSlideWrapper>
    </StyledCardLink>
  );
};
