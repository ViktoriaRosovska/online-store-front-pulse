import CardButton from "../Buttons/CardButton";
import { ButtonWrapper, SectionBanner, TitleBox } from "./Banner.styled";
const MyComponent = () => {
  return (
    <SectionBanner>
      <TitleBox>
        <h1 className="banner_1"> ЗНИЖКА ДО -50% НА ЗИМОВЕ ВЗУТТЯ</h1>
      </TitleBox>

      <ButtonWrapper className="banner_btn">
        <CardButton text={"Каталог"} />
      </ButtonWrapper>
    </SectionBanner>
  );
};

export default MyComponent;
