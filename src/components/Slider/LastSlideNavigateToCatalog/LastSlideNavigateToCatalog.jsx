import {
  CardButtonContainer,
  StyledCardLink,
} from "components/Card/Card.styled";
import { ROUTES } from "../../../utils/routes";

export const LastSlideNavigateToCatalog = ({ to }) => {
  return (
    <StyledCardLink to={to}>
      <div
        style={{
          height: "315px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        Переглянути більше...
        <CardButtonContainer>
          До {to === ROUTES.NEWBRANDS ? "новинок" : "розпродажу"}
        </CardButtonContainer>
      </div>
    </StyledCardLink>
  );
};
