import { useNavigate } from "react-router-dom";
import CardButton from "../Buttons/CardButton/CardButton";
import { ButtonWrapper, SectionBanner, TitleBox } from "./Banner.styled";
const MyComponent = () => {
  const navigate = useNavigate();
  const aLink = () => {
    navigate("/catalog");
  };
  return (
    <SectionBanner>
      <TitleBox>
        <h1 className="banner_1"> ЗНИЖКА ДО -50% НА ЗИМОВЕ ВЗУТТЯ</h1>
      </TitleBox>

      <ButtonWrapper className="banner_btn">
        <CardButton text={"Каталог"} click={aLink} />
      </ButtonWrapper>
    </SectionBanner>
  );
};

export default MyComponent;
