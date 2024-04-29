// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container } from "../../main.styled";
import { ROUTES } from "../../utils/routes";
import CardButton from "../Buttons/CardButton/CardButton";
import {
  // ButtonWrapper,
  SectionBanner,
  StyledBannerWrapper,
  TitleBox,
} from "./Banner.styled";
const Banner = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const aLink = () => {
  //   navigate("/sales");
  // };
  return (
    <SectionBanner>
      <Container>
        <StyledBannerWrapper>
          <TitleBox>
            <h1 className="banner_1"> ЗНИЖКА ДО -50% НА ЗИМОВЕ ВЗУТТЯ</h1>
          </TitleBox>

          <CardButton
            text={"Каталог"}
            route={ROUTES.SALES}
            state={{ from: location }}
          />
        </StyledBannerWrapper>
      </Container>
    </SectionBanner>
  );
};

export default Banner;
