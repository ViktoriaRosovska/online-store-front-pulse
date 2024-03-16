import Button from "../Buttons/CardButton";
import { SectionBanner, TitleBox } from "./Banner.styled";
const MyComponent = () => {
  return (
    <SectionBanner>
      <TitleBox>
        <h1 className="banner_1"> ЗНИЖКА ДО -50% НА ЗИМОВЕ ВЗУТТЯ</h1>
      </TitleBox>

      <div className="banner_btn">
        <Button text={"Каталог"} />
      </div>
    </SectionBanner>
  );
};

export default MyComponent;
