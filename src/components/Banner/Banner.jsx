// import { useNavigate } from "react-router-dom";
import { Container } from "../../main.styled";
import { ROUTES } from "../../utils/routes";
import CardButton from "../Buttons/CardButton/CardButton";
import {
  ButtonWrapper,
  SectionBanner,
  StyledBannerWrapper,
  TitleBox,
} from "./Banner.styled";
const Banner = () => {
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
          <ButtonWrapper className="banner_btn">
            {/* <CardButton text={"Каталог"} click={aLink} /> */}
            <CardButton text={"Каталог"} route={ROUTES.SALES} />
          </ButtonWrapper>
        </StyledBannerWrapper>
      </Container>
    </SectionBanner>
  );
};

export default Banner;
