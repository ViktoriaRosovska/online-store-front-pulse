import {
  // CardButtonContainer,
  StyledCardLink,
} from "components/Card/Card.styled";
import { ROUTES } from "../../../utils/routes";

export const LastSlideNavigateToCatalog = ({ to }) => {
  return (
    <StyledCardLink to={to}>
      <div
        style={{
          height: "286px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",

          textDecoration: "underline",
        }}
      >
        <span>Переглянути більше.</span>
        <span>
          Перейти до&nbsp;
          {to === ROUTES.NEWBRANDS ? "новинок" : "розпродажу"}...
        </span>
        {/* <CardButtonContainer>
          До {to === ROUTES.NEWBRANDS ? "новинок" : "розпродажу"}
        </CardButtonContainer> */}
      </div>
    </StyledCardLink>
  );
};
